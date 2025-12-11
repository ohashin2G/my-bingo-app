interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-full flex flex-col md:flex-row bg-warm-white">
      {/* Left Side - Compelling Text */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 bg-espresso text-cream">
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Break the Ice.<br />Make Connections.
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/80 leading-relaxed mb-12 max-w-xl">
            Transform awkward introductions into engaging conversations with social bingo
          </p>
          
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center bg-leaf hover:bg-leaf-light text-warm-white font-bold text-xl px-12 py-6 transition-all duration-200 active:scale-95"
          >
            Start Playing
          </button>
          
          <div className="mt-16 space-y-3 text-sm text-cream/60 tracking-wide uppercase">
            <p>Find matches • Mark squares • Win bingo</p>
          </div>
        </div>
      </div>
      
      {/* Right Side - Minimalist Visual */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
        {/* Abstract Geometric Bingo Grid Visual */}
        <div className="relative w-full max-w-md aspect-square">
          {/* Large minimalist grid pattern */}
          <div className="grid grid-cols-5 gap-2 w-full h-full">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className="bg-mocha/10 hover:bg-mocha/20 transition-colors"
                style={{
                  animationDelay: `${i * 0.03}s`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                  opacity: 0
                }}
              />
            ))}
          </div>
          
          {/* Accent highlight on center square */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[19%] h-[19%] bg-leaf/30 border-4 border-leaf" />
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
