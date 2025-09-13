# konekoya.github.com

Personal website, powered by React + Vite + TypeScript and deployed to https://konekoya.github.io/ via GitHub Actions.

## Tech Stack

- React 19, TypeScript 5
- Vite 7
- ESLint (flat), CSS Modules

## Structure

- `src/` — React components, styles, assets
- `public/` — static assets (favicons)
- `package.json` — npm scripts
- `.github/workflows/deploy-pages.yml` — CI to build and deploy `dist` to GitHub Pages

## Scripts

- `nvm use`
- `npm install`
- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview built site

Deploys automatically on push to `master`.

## Vercel Preview Deployments (optional)

This repo includes a `vercel.json` so it can be connected to Vercel for per‑PR preview URLs.

How to enable previews:
- Install the Vercel GitHub app and import this repository.
- Framework will be detected (Vite). Build command `npm run build`, output `dist/`.
- Vercel will post a preview URL on each pull request automatically.

Routing: `vercel.json` rewrites all routes to `/index.html` to support SPA deep links.
