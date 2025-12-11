import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { CardDeckScreen } from './components/CardDeckScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const {
    gameMode,
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    cardDeck,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
    drawNextCard,
    resetCardDeck,
  } = useBingoGame();

  if (gameState === 'start') {
    return <StartScreen onStart={startGame} />;
  }

  if (gameMode === 'card-deck') {
    const currentQuestion = cardDeck.shuffledQuestions[cardDeck.currentIndex] || '';
    const isFinished = cardDeck.currentIndex >= cardDeck.shuffledQuestions.length;

    return (
      <CardDeckScreen
        currentQuestion={currentQuestion}
        currentIndex={cardDeck.currentIndex}
        totalCards={cardDeck.shuffledQuestions.length}
        onDrawNext={drawNextCard}
        onReset={resetCardDeck}
        isFinished={isFinished}
      />
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
