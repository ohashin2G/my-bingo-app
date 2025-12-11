# Design Spec: Card Deck Shuffle Mode

## Overview
Adding a new game mode where each player draws random question cards by tapping, like shuffling through a deck. Simpler than bingo—no winning condition, just discovery and conversation starters.

## User Flow
1. Start screen → player picks "Card Deck Shuffle" mode
2. Opens directly to a card view with the first random question
3. Tap anywhere to draw next random card
4. Can reset to shuffle a new deck

## Design Decisions

### Layout
- Single centered card (not a grid)
- Card should feel tactile, like a physical playing card
- Use coffee theme: warm tones, soft shadows, paper texture
- Question text prominent and readable

### Interaction
- Tap/click anywhere on card to draw next
- Smooth card flip or slide transition
- Visual feedback on tap (subtle scale/shadow)
- Progress indicator optional (e.g., "Card 5 of 24")

### State Management
- Shuffle all questions at mode start
- Track current index in shuffled deck
- When deck exhausted, show "reshuffle" prompt
- Persist deck state in localStorage like bingo mode

### Mobile-First
- Large tap target (entire card)
- Readable text size (at least 18px)
- Vertical layout friendly
- No complex gestures needed

## Implementation Notes
- Reuse existing questions from questions.ts
- Minimal code duplication with bingo mode
- Keep StartScreen mode selector simple (two buttons)
- Card component should be standalone and reusable

## Iteration 1: Foundation ✅
- [x] Design spec created
- [x] Types extended for mode selection (GameMode, CardDeckState)
- [x] StartScreen updated with two-button mode picker
- [x] CardDeckScreen component with coffee theme styling
- [x] Routing in App.tsx based on gameMode

### Implementation Highlights
- **Mode Selection**: Side-by-side buttons with icons (🎲 Bingo / 🃏 Card Deck)
- **Card Styling**: Large tactile card using .coffee-card class with steam effect
- **Full Integration**: useBingoGame hook extended with shuffleArray, drawNextCard, resetCardDeck
- **State Persistence**: Storage version bumped to v2 with cardDeck state
- **End State**: Celebration screen when all cards drawn with reshuffle button

## Next Steps (Optional Polish)
- [ ] Add swipe gestures for mobile (left/right to draw)
- [ ] Card flip animation on draw
- [ ] Sound effects on tap
- [ ] Share card to social media
- [ ] Multiple deck themes
