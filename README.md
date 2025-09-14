# konekoya.github.com

Personal website built with React, Vite, and TypeScript. Deployed to https://konekoya.github.io/ via GitHub Actions.

## Requirements

- Node `22` (`nvm use`)
- npm `10+`

## Setup

- `npm install`
- `npm run dev` — start dev server

## Scripts

- `npm run build` — production build to `dist`
- `npm run preview` — preview the built site
- `npm run lint` — ESLint (no warnings allowed)
- `npm run typecheck` — TypeScript build mode
- `npm run format` — Prettier write
- `npm run format:check` — Prettier check (CI)

## Project Structure

- `src/` — components, styles (CSS Modules), entry
- `public/` — static assets

## CI / Deploy

- CI runs format check, lint, typecheck, and build on PRs
- Push to `master` triggers build and deploy to GitHub Pages
