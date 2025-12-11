interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #faf7f2 0%, #f5e6d3 50%, #e8dcc8 100%)'
      }}>
      
      {/* Decorative coffee beans scattered around */}
      <div className="absolute top-[10%] left-[5%] coffee-bean opacity-40" 
           style={{ transform: 'rotate(25deg)', animation: 'float 6s ease-in-out infinite' }}
           aria-hidden="true" />
      <div className="absolute top-[15%] right-[8%] coffee-bean opacity-30" 
           style={{ transform: 'rotate(-15deg)', animation: 'float 7s ease-in-out infinite 1s' }}
           aria-hidden="true" />
      <div className="absolute bottom-[20%] left-[10%] coffee-bean opacity-35" 
           style={{ transform: 'rotate(45deg)', animation: 'float 8s ease-in-out infinite 2s' }}
           aria-hidden="true" />
      <div className="absolute bottom-[15%] right-[12%] coffee-bean opacity-25" 
           style={{ transform: 'rotate(-35deg)', animation: 'float 5.5s ease-in-out infinite 0.5s' }}
           aria-hidden="true" />

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-lg">
        
        {/* Coffee cup illustration */}
        <div className="relative mx-auto w-fit mb-8" 
             style={{ animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
          <div className="coffee-cup mx-auto">
            <div className="steam-wisp" />
            <div className="steam-wisp" />
            <div className="steam-wisp" />
          </div>
        </div>

        {/* Title with playful styling */}
        <div className="mb-4" style={{ animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s backwards' }}>
          <h1 className="text-6xl font-bold mb-2" 
              style={{ 
                fontFamily: "'Caveat', cursive",
                color: 'var(--color-coffee-dark)',
                textShadow: '3px 3px 0px rgba(217, 119, 6, 0.3)',
                transform: 'rotate(-2deg)',
                display: 'inline-block'
              }}>
            Soc Ops Bingo!
          </h1>
          <div className="relative inline-block ml-2">
            <div className="squiggle" style={{ top: '10px', left: '-20px' }} aria-hidden="true" />
          </div>
        </div>

        <p className="text-xl mb-10" 
           style={{ 
             color: 'var(--color-coffee-medium)',
             fontWeight: '600',
             animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s backwards'
           }}>
          Let's caffeinate your networking! ☕️
        </p>

        {/* How to play card with playful design */}
        <div className="relative bg-white rounded-2xl p-8 mb-10 transform -rotate-1"
             style={{ 
               boxShadow: '8px 8px 0px rgba(217, 119, 6, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)',
               animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s backwards'
             }}>
          
          {/* Mini bingo card decoration */}
          <div className="absolute -top-6 -right-6 hidden sm:block" aria-hidden="true">
            <div className="bingo-card-mini" style={{ animation: 'wiggle 3s ease-in-out infinite' }}>
              <div>B</div>
              <div>I</div>
              <div>N</div>
              <div>G</div>
              <div>O</div>
              <div>!</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" 
              style={{ 
                fontFamily: "'Caveat', cursive",
                color: 'var(--color-coffee-dark)'
              }}>
            How to play:
          </h2>
          
          <ul className="text-left space-y-4" style={{ color: 'var(--color-coffee-dark)' }}>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0" style={{ color: 'var(--color-accent-warm)' }}>
                👋
              </span>
              <span className="text-lg">
                Mingle and find folks who match each square
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0" style={{ color: 'var(--color-accent-pink)' }}>
                👆
              </span>
              <span className="text-lg">
                Tap a square when you discover a match
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0" style={{ color: 'var(--color-accent-green)' }}>
                🎉
              </span>
              <span className="text-lg">
                Score 5 in a row and celebrate your win!
              </span>
            </li>
          </ul>
        </div>

        {/* Start button with playful styling */}
        <button
          onClick={onStart}
          className="relative w-full font-bold py-5 px-10 rounded-2xl text-2xl overflow-hidden group transform hover:scale-105 transition-transform duration-200"
          style={{
            fontFamily: "'Caveat', cursive",
            background: 'linear-gradient(135deg, var(--color-accent-warm) 0%, var(--color-accent-pink) 100%)',
            color: 'white',
            boxShadow: '0 8px 0 rgba(217, 119, 6, 0.4), 0 12px 30px rgba(0, 0, 0, 0.2)',
            animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s backwards',
            transform: 'rotate(1deg)'
          }}
        >
          <span className="relative z-10">Let's Go! 🚀</span>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-200" />
        </button>

        {/* Fun encouraging text */}
        <p className="mt-6 text-sm opacity-70" 
           style={{ 
             color: 'var(--color-coffee-medium)',
             fontStyle: 'italic',
             animation: 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s backwards'
           }}>
          Break the ice, one square at a time! ✨
        </p>
      </div>

      {/* Decorative elements at bottom corners */}
      <div className="absolute bottom-8 left-8 hidden md:block" aria-hidden="true"
           style={{ animation: 'float 5s ease-in-out infinite' }}>
        <div className="coffee-bean" style={{ transform: 'rotate(20deg) scale(1.2)' }} />
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block" aria-hidden="true"
           style={{ animation: 'float 6s ease-in-out infinite 1.5s' }}>
        <div className="coffee-bean" style={{ transform: 'rotate(-20deg) scale(1.2)' }} />
      </div>
    </div>
  );
}
