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

## Iteration 1: Foundation
- [ ] Design spec created
- [ ] Types extended for mode selection
- [ ] StartScreen updated with mode picker
- [ ] Basic CardDeckScreen shell
- [ ] Routing in App.tsx

## Iteration 2: Card Display & Interaction
- [ ] Card styling with coffee theme
- [ ] Tap-to-draw interaction
- [ ] Shuffle logic in hook
- [ ] Progress indicator

## Iteration 3: Polish
- [ ] Smooth transitions
- [ ] End-of-deck handling
- [ ] State persistence
- [ ] Responsive refinement
