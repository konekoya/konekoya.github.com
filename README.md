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

- `nvm use` (Node 22)
- `npm install`
- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview built site

Deploys automatically on push to `master`.

## Netlify Deploy Previews (optional)

This repo includes a `netlify.toml` so it can be connected to Netlify for per‑PR Deploy Previews.

How to enable previews:
- Sign up/in at https://app.netlify.com and click “Add new site” → “Import an existing project”.
- Connect GitHub and select `konekoya/konekoya.github.com`.
- Netlify should auto-detect Vite; if not:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Deploy contexts → ensure “Deploy Previews” are enabled for pull requests.
- Netlify will post a preview URL on each PR automatically.

Routing: `netlify.toml` adds a catch‑all redirect to `/index.html` for SPA deep links.

Note:
- Production remains on GitHub Pages via the Actions workflow; Netlify is used only for PR previews. You can disable “Production deploys” on the Netlify site to avoid confusion.
