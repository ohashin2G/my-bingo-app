interface CardDeckScreenProps {
	currentQuestion: string;
	currentIndex: number;
	totalCards: number;
	onDrawNext: () => void;
	onReset: () => void;
	isFinished: boolean;
}

export function CardDeckScreen({
	currentQuestion,
	currentIndex,
	totalCards,
	onDrawNext,
	onReset,
	isFinished,
}: CardDeckScreenProps) {
	return (
		<div className="min-h-full bg-linear-to-b from-foam via-foam to-foam-strong flex items-center justify-center px-4 py-8">
			<div className="w-full max-w-lg">
				{/* Header */}
				<div className="text-center mb-6">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-caramel/30 to-berry/20 backdrop-blur-sm border border-caramel/40 shadow-lg mb-4">
						<span className="text-xl">🃏</span>
						<span className="font-display text-base text-espresso">Card Deck Shuffle</span>
					</div>
					<div className="text-sm text-mocha/70">
						{isFinished ? (
							<span>Deck complete! ✨</span>
						) : (
							<span>Card {currentIndex + 1} of {totalCards}</span>
						)}
					</div>
				</div>

				{/* Card */}
				{isFinished ? (
					<div className="coffee-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
						<div className="coffee-steam absolute inset-0 opacity-40 pointer-events-none" aria-hidden />
						<div className="relative text-center space-y-6">
							<div className="text-6xl">🎉</div>
							<h2 className="font-display text-2xl text-espresso">All cards drawn!</h2>
							<p className="text-mocha/80">You've gone through the entire deck. Want to shuffle and start fresh?</p>
							<button
								onClick={onReset}
								className="px-6 py-3 rounded-xl bg-linear-to-br from-caramel to-caramel/90 text-espresso font-semibold shadow-lg hover:shadow-xl active:translate-y-0.5 transition-all duration-200"
							>
								<span className="flex items-center gap-2 justify-center">
									<span>♻️</span>
									Shuffle New Deck
								</span>
							</button>
						</div>
					</div>
				) : (
					<button
						onClick={onDrawNext}
						className="w-full coffee-card rounded-3xl p-10 shadow-2xl relative overflow-hidden group cursor-pointer hover:shadow-3xl active:scale-[0.98] transition-all duration-200"
					>
						<div className="coffee-steam absolute inset-0 opacity-40 pointer-events-none" aria-hidden />
						<div className="relative">
							<p className="text-xl md:text-2xl text-espresso leading-relaxed font-medium text-center">
								{currentQuestion}
							</p>
						</div>
						<div className="mt-8 text-center">
							<span className="inline-flex items-center gap-2 text-sm text-mocha/60 group-hover:text-mocha/80 transition-colors">
								Tap to draw next card
								<span className="group-hover:translate-x-1 transition-transform">→</span>
							</span>
						</div>
					</button>
				)}

				{/* Reset Button (when not finished) */}
				{!isFinished && (
					<div className="mt-6 text-center">
						<button
							onClick={onReset}
							className="text-sm text-mocha/60 hover:text-mocha/90 underline underline-offset-2 transition-colors"
						>
							Shuffle new deck
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
