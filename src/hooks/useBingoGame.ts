import { useState, useCallback, useMemo, useEffect } from 'react';
import type { BingoSquareData, BingoLine, GameState, GameMode, CardDeckState } from '../types';
import {
  generateBoard,
  toggleSquare,
  checkBingo,
  getWinningSquareIds,
} from '../utils/bingoLogic';
import { questions } from '../data/questions';

export interface BingoGameState {
  gameMode: GameMode | null;
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
  winningSquareIds: Set<number>;
  showBingoModal: boolean;
  cardDeck: CardDeckState;
}

export interface BingoGameActions {
  startGame: (mode: GameMode) => void;
  handleSquareClick: (squareId: number) => void;
  resetGame: () => void;
  dismissModal: () => void;
  drawNextCard: () => void;
  resetCardDeck: () => void;
}

const STORAGE_KEY = 'bingo-game-state';
const STORAGE_VERSION = 2;

interface StoredGameData {
  version: number;
  gameMode: GameMode | null;
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
  cardDeck: CardDeckState;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function validateStoredData(data: unknown): data is StoredGameData {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const obj = data as Record<string, unknown>;

  if (obj.version !== STORAGE_VERSION) {
    return false;
  }

  if (obj.gameMode !== null && typeof obj.gameMode !== 'string') {
    return false;
  }

  if (typeof obj.gameState !== 'string' || !['start', 'playing', 'bingo'].includes(obj.gameState)) {
    return false;
  }

  if (!Array.isArray(obj.board) || (obj.board.length !== 0 && obj.board.length !== 25)) {
    return false;
  }

  const validSquares = obj.board.every((sq: unknown) => {
    if (!sq || typeof sq !== 'object') return false;
    const square = sq as Record<string, unknown>;
    return (
      typeof square.id === 'number' &&
      typeof square.text === 'string' &&
      typeof square.isMarked === 'boolean' &&
      typeof square.isFreeSpace === 'boolean'
    );
  });

  if (!validSquares) {
    return false;
  }

  if (obj.winningLine !== null) {
    if (typeof obj.winningLine !== 'object') {
      return false;
    }
    const line = obj.winningLine as Record<string, unknown>;
    if (
      typeof line.type !== 'string' ||
      !['row', 'column', 'diagonal'].includes(line.type) ||
      typeof line.index !== 'number' ||
      !Array.isArray(line.squares)
    ) {
      return false;
    }
  }

  if (!obj.cardDeck || typeof obj.cardDeck !== 'object') {
    return false;
  }
  const deck = obj.cardDeck as Record<string, unknown>;
  if (typeof deck.currentIndex !== 'number' || !Array.isArray(deck.shuffledQuestions)) {
    return false;
  }

  return true;
}

function loadGameState(): Pick<BingoGameState, 'gameMode' | 'gameState' | 'board' | 'winningLine' | 'cardDeck'> | null {
  // SSR guard
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return null;
    }

    const parsed: unknown = JSON.parse(saved);

    if (validateStoredData(parsed)) {
      return {
        gameMode: parsed.gameMode,
        gameState: parsed.gameState,
        board: parsed.board,
        winningLine: parsed.winningLine,
        cardDeck: parsed.cardDeck,
      };
    } else {
      console.warn('Invalid game state data in localStorage, clearing...');
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.warn('Failed to load game state:', error);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return null;
}

function saveGameState(
  gameMode: GameMode | null,
  gameState: GameState,
  board: BingoSquareData[],
  winningLine: BingoLine | null,
  cardDeck: CardDeckState
): void {
  // SSR guard
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const data: StoredGameData = {
      version: STORAGE_VERSION,
      gameMode,
      gameState,
      board,
      winningLine,
      cardDeck,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save game state:', error);
  }
}

export function useBingoGame(): BingoGameState & BingoGameActions {
  const loadedState = useMemo(() => loadGameState(), []);

  const [gameMode, setGameMode] = useState<GameMode | null>(
    () => loadedState?.gameMode || null
  );
  const [gameState, setGameState] = useState<GameState>(
    () => loadedState?.gameState || 'start'
  );
  const [board, setBoard] = useState<BingoSquareData[]>(
    () => loadedState?.board || []
  );
  const [winningLine, setWinningLine] = useState<BingoLine | null>(
    () => loadedState?.winningLine || null
  );
  const [showBingoModal, setShowBingoModal] = useState(false);
  const [cardDeck, setCardDeck] = useState<CardDeckState>(
    () => loadedState?.cardDeck || { currentIndex: 0, shuffledQuestions: [] }
  );

  const winningSquareIds = useMemo(
    () => getWinningSquareIds(winningLine),
    [winningLine]
  );

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    saveGameState(gameMode, gameState, board, winningLine, cardDeck);
  }, [gameMode, gameState, board, winningLine, cardDeck]);

  const startGame = useCallback((mode: GameMode) => {
    setGameMode(mode);

    if (mode === 'bingo') {
      setBoard(generateBoard());
      setWinningLine(null);
      setGameState('playing');
    } else if (mode === 'card-deck') {
      const shuffled = shuffleArray(questions);
      setCardDeck({ currentIndex: 0, shuffledQuestions: shuffled });
      setGameState('playing');
    }
  }, []);

  const handleSquareClick = useCallback((squareId: number) => {
    setBoard((currentBoard) => {
      const newBoard = toggleSquare(currentBoard, squareId);

      // Check for bingo after toggling
      const bingo = checkBingo(newBoard);
      if (bingo && !winningLine) {
        // Schedule state updates to avoid synchronous setState in effect
        queueMicrotask(() => {
          setWinningLine(bingo);
          setGameState('bingo');
          setShowBingoModal(true);
        });
      }

      return newBoard;
    });
  }, [winningLine]);

  const resetGame = useCallback(() => {
    setGameState('start');
    setGameMode(null);
    setBoard([]);
    setWinningLine(null);
    setShowBingoModal(false);
    setCardDeck({ currentIndex: 0, shuffledQuestions: [] });
  }, []);

  const dismissModal = useCallback(() => {
    setShowBingoModal(false);
  }, []);

  const drawNextCard = useCallback(() => {
    setCardDeck((current) => ({
      ...current,
      currentIndex: Math.min(current.currentIndex + 1, current.shuffledQuestions.length),
    }));
  }, []);

  const resetCardDeck = useCallback(() => {
    const shuffled = shuffleArray(questions);
    setCardDeck({ currentIndex: 0, shuffledQuestions: shuffled });
  }, []);

  return {
    gameMode,
    gameState,
    board,
    winningLine,
    winningSquareIds,
    showBingoModal,
    cardDeck,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
    drawNextCard,
    resetCardDeck,
  };
}
