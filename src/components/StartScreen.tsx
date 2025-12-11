import type { GameMode } from '../types';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-full bg-linear-to-b from-foam via-foam to-foam-strong overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-6 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Decorative coffee rings */}
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-4 border-caramel/10 opacity-40" aria-hidden />
          <div className="absolute top-32 right-16 w-24 h-24 rounded-full border-4 border-berry/10 opacity-30" aria-hidden />
          <div className="absolute bottom-20 left-8 w-40 h-40 rounded-full border-4 border-leaf/10 opacity-35" aria-hidden />

          {/* Header badge */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-caramel/30 to-berry/20 backdrop-blur-sm border border-caramel/40 shadow-lg">
              <span className="text-2xl">☕</span>
              <span className="font-display text-lg text-espresso">Soc Ops Café</span>
            </div>
          </div>

          {/* Hero text */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-display text-espresso leading-[1.1] tracking-tight">
              Break the Ice,<br />
              <span className="text-berry">One Square at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-mocha/90 leading-relaxed max-w-2xl mx-auto">
              A warm social bingo game that turns awkward introductions into playful connections.
              Meet new faces, discover shared stories, and celebrate those sweet bingo moments.
            </p>
          </div>

          {/* CTA Section - Mode Selection */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl px-4">
              <button
                onClick={() => onStart('bingo')}
                className="group flex-1 px-6 py-5 rounded-xl bg-linear-to-br from-caramel to-caramel/90 text-espresso shadow-xl hover:shadow-2xl active:translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">🎲</span>
                  <span className="font-semibold text-lg">Classic Bingo</span>
                  <span className="text-sm opacity-80">5×5 grid · Get five in a row</span>
                </div>
              </button>
              <button
                onClick={() => onStart('card-deck')}
                className="group flex-1 px-6 py-5 rounded-xl bg-linear-to-br from-berry to-berry/90 text-foam shadow-xl hover:shadow-2xl active:translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">🃏</span>
                  <span className="font-semibold text-lg">Card Deck Shuffle</span>
                  <span className="text-sm opacity-80">Tap · Draw random questions</span>
                </div>
              </button>
            </div>
            <p className="text-sm text-mocha/70 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-leaf animate-pulse" />
              No signup. No tracking. Just good vibes.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 pb-16">
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* How to Play */}
          <div className="coffee-card rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="coffee-steam absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
            <div className="relative space-y-4">
              <div className="text-3xl mb-2">🎲</div>
              <h3 className="font-display text-xl text-espresso">How to Play</h3>
              <ul className="space-y-2 text-sm text-mocha/90 leading-relaxed">
                <li className="flex gap-2"><span className="text-berry font-semibold">1.</span> Meet someone new at the event</li>
                <li className="flex gap-2"><span className="text-berry font-semibold">2.</span> Chat and see if prompts match</li>
                <li className="flex gap-2"><span className="text-berry font-semibold">3.</span> Tap matching squares on your board</li>
                <li className="flex gap-2"><span className="text-berry font-semibold">4.</span> Get five in a row to win!</li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="coffee-card rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="coffee-steam absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
            <div className="relative space-y-4">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-display text-xl text-espresso">Built for Fun</h3>
              <ul className="space-y-2 text-sm text-mocha/90 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-leaf mt-0.5">●</span>
                  <span>5×5 board with free center space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-leaf mt-0.5">●</span>
                  <span>Fresh shuffle every new game</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-leaf mt-0.5">●</span>
                  <span>Mobile-friendly tap targets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-leaf mt-0.5">●</span>
                  <span>Progress saved automatically</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy */}
          <div className="coffee-card rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="coffee-steam absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
            <div className="relative space-y-4">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-display text-xl text-espresso">Privacy First</h3>
              <div className="space-y-3 text-sm text-mocha/90 leading-relaxed">
                <p>Everything stays in your browser. No servers, no accounts, no data collection.</p>
                <p>Refresh safely — your game state persists across sessions using local storage.</p>
                <p className="pt-2 text-xs text-mocha/70 italic">Just pure, untracked social fun.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="text-center pb-12 px-6">
        <p className="text-sm text-mocha/60 font-display italic">
          Brewed with care for friendly gatherings
        </p>
      </div>
    </div>
  );
}
