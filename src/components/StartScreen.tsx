interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc8 25%, #d4c4a8 50%, #c49a6c 75%, #6f4e37 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 15s ease infinite'
      }}
    >
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-berry/10" 
           style={{ animation: 'float 6s ease-in-out infinite' }}></div>
      <div className="absolute bottom-20 right-16 w-20 h-20 rounded-full bg-leaf/10" 
           style={{ animation: 'float 8s ease-in-out infinite 1s' }}></div>
      <div className="absolute top-1/4 right-10 w-12 h-12 rounded-full bg-caramel/10" 
           style={{ animation: 'float 7s ease-in-out infinite 2s' }}></div>

      <div className="relative text-center max-w-md z-10">
        {/* Coffee Cup with Steam Animation */}
        <div className="relative mb-8" style={{ animation: 'fade-in-up 0.8s ease-out' }}>
          <div className="relative inline-block">
            {/* Steam effects */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div 
                className="w-3 h-12 rounded-full bg-gradient-to-t from-caramel/60 to-transparent blur-sm"
                style={{ animation: 'steam-rise 3s ease-in-out infinite' }}
              ></div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 -ml-4">
              <div 
                className="w-3 h-12 rounded-full bg-gradient-to-t from-mocha/50 to-transparent blur-sm"
                style={{ animation: 'steam-rise-2 3.5s ease-in-out infinite 0.5s' }}
              ></div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 ml-4">
              <div 
                className="w-3 h-12 rounded-full bg-gradient-to-t from-caramel/55 to-transparent blur-sm"
                style={{ animation: 'steam-rise-3 3.2s ease-in-out infinite 1s' }}
              ></div>
            </div>
            
            {/* Coffee Cup */}
            <div className="text-8xl select-none">☕</div>
          </div>
        </div>

        {/* Title with staggered animation */}
        <h1 
          className="text-6xl font-display font-bold text-espresso mb-3"
          style={{ 
            animation: 'fade-in-up 0.8s ease-out 0.2s backwards',
            textShadow: '2px 2px 4px rgba(61, 40, 23, 0.1)'
          }}
        >
          Soc Ops
        </h1>
        
        <p 
          className="text-2xl font-display italic text-mocha mb-12"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.4s backwards' }}
        >
          Social Bingo
        </p>
        
        {/* How to Play Card with hover effect */}
        <div 
          className="bg-foam/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-caramel/30 mb-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          style={{ 
            animation: 'fade-in-up 0.8s ease-out 0.6s backwards',
            boxShadow: '0 10px 40px rgba(111, 78, 55, 0.2)'
          }}
        >
          <h2 
            className="font-display text-2xl font-semibold text-espresso mb-5 flex items-center justify-center gap-2"
          >
            <span className="text-3xl">🎯</span>
            How to Play
          </h2>
          <ul className="text-left text-mocha space-y-3 font-sans text-base">
            <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
              <span className="text-berry text-xl flex-shrink-0">✦</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
              <span className="text-leaf text-xl flex-shrink-0">✦</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
              <span className="text-caramel text-xl flex-shrink-0">✦</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start Button with pulsing glow effect */}
        <button
          onClick={onStart}
          className="relative w-full bg-mocha hover:bg-espresso text-foam font-display font-semibold py-5 px-10 rounded-xl text-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group"
          style={{ 
            animation: 'fade-in-up 0.8s ease-out 0.8s backwards, pulse-glow 2s ease-in-out infinite',
            boxShadow: '0 10px 30px rgba(111, 78, 55, 0.4)'
          }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-foam/20 to-transparent"
            style={{ animation: 'shimmer 3s linear infinite' }}
          ></div>
          
          <span className="relative flex items-center justify-center gap-3">
            Start Game
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🎲</span>
          </span>
        </button>

        {/* Subtle badge */}
        <div 
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-leaf/20 rounded-full text-sm text-espresso font-sans"
          style={{ animation: 'fade-in-up 0.8s ease-out 1s backwards' }}
        >
          <span className="animate-pulse">●</span>
          <span>Coffee break approved</span>
        </div>
      </div>
    </div>
  );
}
