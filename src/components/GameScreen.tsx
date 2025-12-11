import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="min-h-full bg-gradient-to-b from-foam to-foam-strong flex flex-col">
      <header className="px-4 md:px-8 py-4 flex items-center justify-between border-b border-foam-strong/80 bg-white/70 backdrop-blur shadow-xs">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-caramel/80 flex items-center justify-center text-espresso shadow-inner">
            ☕
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-mocha/70">Soc Ops Café</p>
            <h1 className="text-xl font-display text-espresso leading-tight">Table Bingo</h1>
          </div>
        </div>
        <button
          onClick={onReset}
          className="text-sm font-semibold text-espresso px-4 py-2 rounded-lg bg-foam shadow-xs border border-foam-strong/80 active:translate-y-[1px]"
        >
          Brew a fresh card
        </button>
      </header>

      {hasBingo && (
        <div className="mx-4 md:mx-8 mt-4 rounded-xl bg-caramel/20 text-espresso border border-caramel/60 px-4 py-3 font-semibold shadow-xs flex items-center gap-2">
          <span aria-hidden>✨</span>
          Bingo! Claim your victory sip.
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-4 py-6 md:px-10 md:py-10">
        <div className="w-full max-w-4xl coffee-paper rounded-2xl p-6 md:p-8 border border-foam-strong/80 relative overflow-hidden">
          <div className="absolute inset-0 coffee-steam opacity-60 pointer-events-none" aria-hidden />
          <div className="relative flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3 flex items-center justify-center">
              <BingoBoard
                board={board}
                winningSquareIds={winningSquareIds}
                onSquareClick={onSquareClick}
              />
            </div>
            <div className="lg:w-1/3 space-y-4 text-mocha/85 text-sm leading-relaxed">
              <h2 className="font-display text-lg text-espresso">House Rules</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Tap a tile when you meet someone who fits the prompt.</li>
                <li>Rows, columns, or diagonals all count for bingo.</li>
                <li>The center tile is a free space — it is already marked.</li>
                <li>Your progress stays in this browser until you reset.</li>
              </ul>
              <div className="rounded-lg bg-foam px-3 py-3 border border-foam-strong/80 shadow-xs text-xs text-mocha/70">
                Tip: If a square feels tricky, start a new card with "Brew a fresh card" for a new shuffle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
