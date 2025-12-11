/** Domain types for the Bingo game */

export type GameMode = 'bingo' | 'card-deck';

export interface BingoSquareData {
  id: number;
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
}

export interface BingoLine {
  type: 'row' | 'column' | 'diagonal';
  index: number;
  squares: number[];
}

export type GameState = 'start' | 'playing' | 'bingo';

export interface CardDeckState {
  currentIndex: number;
  shuffledQuestions: string[];
}
