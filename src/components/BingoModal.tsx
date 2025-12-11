interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="coffee-card rounded-2xl max-w-sm w-full p-7 border border-foam-strong/90 text-center relative overflow-hidden">
        <div className="coffee-steam absolute inset-0 opacity-70 pointer-events-none" aria-hidden />
        <div className="relative space-y-3">
          <div className="text-5xl" aria-hidden>☕</div>
          <h2 className="text-3xl font-display text-espresso">Bingo!</h2>
          <p className="text-mocha/80 text-base leading-relaxed">You lined up five. Take a victory sip and keep mingling.</p>
          <button
            onClick={onDismiss}
            className="w-full mt-2 bg-caramel text-espresso font-semibold py-3 px-6 rounded-lg shadow-md active:translate-y-[1px] transition-transform"
          >
            Keep playing
          </button>
        </div>
      </div>
    </div>
  );
}
