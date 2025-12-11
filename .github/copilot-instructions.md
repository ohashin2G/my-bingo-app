# Copilot Instructions for Soc Ops

- [ ] lint
- [ ] build
- [ ] test

## Project map
- Entry mounts React in [src/main.tsx](src/main.tsx) and renders [src/App.tsx](src/App.tsx)
- Stateful logic lives in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts); UI shells are in [src/components](src/components)
- Domain types in [src/types/index.ts](src/types/index.ts); questions in [src/data/questions.ts](src/data/questions.ts)
- Bingo logic (board, toggle, win check) in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) with tests in [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)

## Gameplay model
- Fixed 5x5 board with free space at center index 12 marked/disabled; 24 prompts pulled from shuffled questions slice
- Use bingoLogic helpers and return new arrays; free space cannot be toggled
- Winning squares derived via getWinningSquareIds and passed to BingoBoard/BingoSquare

## Persistence and flow
- useBingoGame stores state in localStorage key bingo-game-state with schema version guard; invalid data is cleared
- queueMicrotask defers bingo side effects after toggles; keep this pattern when adding post-toggle work

## UI and styling
- Tailwind v4 with theme tokens in [src/index.css](src/index.css): espresso/mocha/caramel/foam palette, leaf/berry accents, fonts Playfair Display (display) + Manrope (body); prefer token utilities (bg-caramel, text-espresso) over hex
- Layout roles: StartScreen (CTA + barista notes), GameScreen (header, rules sidebar, board card), BingoBoard (5x5 grid), BingoSquare (tactile tiles with winning highlight), BingoModal (celebration overlay)

## Design guide
- Aesthetic: Cozy Coffee Shop—warm gradients, paper/steam helper classes (.coffee-paper, .coffee-card, .coffee-steam), avoid generic purple/white schemes
- Typography: headings use font-display, body uses font-sans; keep readable sizes and relaxed line-height
- Tiles: keep center free space disabled and marked; marked tiles use caramel/leaf tones; subtle elevation via shadow classes
- Motion: gentle translations on buttons/tiles; modal already blurred overlay—avoid heavy animations that fight the calm vibe
- Assets: use CSS gradients/patterns instead of images; stay ASCII-friendly and keep non-ASCII minimal (emojis ok in UI)

## Build/test
- npm scripts: npm run dev, npm run lint, npm run test, npm run build; dev server defaults to port 5173
- Vitest covers pure logic; add tests near implementations and keep ESLint (type-aware) happy (eslint.config.js)

## Extending safely
- Update questions in [src/data/questions.ts](src/data/questions.ts) keeping at least 24 items
- If board size changes, sync constants and winning-line generation in bingoLogic plus grid classes
- When changing stored shape, bump STORAGE_VERSION and adjust validation in useBingoGame
