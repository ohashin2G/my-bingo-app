import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center px-2 text-center rounded-lg border transition-all duration-200 select-none shadow-xs min-h-[64px] md:min-h-[72px] text-[13px] leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-leaf/25 border-leaf text-ink shadow-md'
      : 'bg-caramel/30 border-caramel/80 text-espresso shadow-md'
    : 'bg-foam text-espresso border-foam-strong hover:-translate-y-[1px] active:translate-y-[1px]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-semibold text-sm border-dashed border-mocha/60' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">
        {square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-[11px] text-espresso bg-foam px-1 py-0.5 rounded-full border border-foam-strong shadow-inner">
          ✓
        </span>
      )}
      {square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-[10px] uppercase tracking-[0.14em] text-mocha/70">Free</span>
      )}
    </button>
  );
}
