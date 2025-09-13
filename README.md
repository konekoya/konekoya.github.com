# konekoya.github.com

Personal website, powered by React + Vite + TypeScript and deployed to https://konekoya.github.io/ via GitHub Actions.

## Tech Stack

- React 19, TypeScript 5
- Vite 7
- ESLint (flat), CSS Modules

## Structure

- `web/` — app source (Node 20 via `web/.nvmrc`)
  - `src/` — React components, styles, assets
  - `public/` — static assets (favicons)
  - `package.json` — npm scripts
- `.github/workflows/deploy-pages.yml` — CI to build and deploy `web/dist` to GitHub Pages

## Scripts (run inside `web/`)

- `nvm use`
- `npm install`
- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview built site

Deploys automatically on push to `master`.
