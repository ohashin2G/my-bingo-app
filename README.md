# Soc Ops · Social Bingo for Mixers

A tiny React + Vite + Tailwind v4 app that turns meeting new people into a quick game: find folks who match prompts, tap squares, and call BINGO when you line up five.

## Why you'll like it
- Fast start: open the dev server and play immediately—no accounts or setup.
- Built for groups: 5×5 board with a free center space; prompts shuffle every game.
- Mobile friendly: tap-first UI, big targets, celebratory modal on win.
- Session memory: progress is stored locally so refreshes are safe.

## Quick start
1) Prereq: Node.js 22+
2) Install: `npm install`
3) Run dev server: `npm run dev` (defaults to port 5173)
4) Lint / Test / Build: `npm run lint` · `npm run test` · `npm run build`

## How the game works
- Board: fixed 5×5 grid; center index 12 is a marked, disabled free space.
- Prompts: drawn from 24 shuffled entries in [src/data/questions.ts](src/data/questions.ts).
- Logic: pure helpers in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) handle board generation, toggling, and win detection; tests live in [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts).
- State: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) manages play/bingo states, winning squares, and `localStorage` persistence with schema versioning.
- UI: shells in [src/components](src/components) (StartScreen, GameScreen, BingoBoard, BingoSquare, BingoModal) with theme tokens defined in [src/index.css](src/index.css).

## Tech stack
- React 19 with Vite
- TypeScript, Tailwind CSS v4
- ESLint (type-aware) and Vitest

## Deployment
Push to `main` to build and deploy via GitHub Pages.

## Customization ideas
- Swap or expand prompts in [src/data/questions.ts](src/data/questions.ts) (keep at least 24).
- Tweak colors by adjusting theme variables in [src/index.css](src/index.css).
- Want a different board size or mode? Update constants and winning-line generation in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) and align the grid classes in [src/components/BingoBoard.tsx](src/components/BingoBoard.tsx).
