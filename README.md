# konekoya.github.com

Personal website hosted via GitHub Pages. This repo contains the static site source, a small client-side script to fetch my GitHub avatar, and a legacy Gulp build pipeline.

Credit: Page background effect is inspired by [hello](http://jlord.us/hello/).

## Tech Stack (Current)

- Markup & Styles: HTML5, SCSS (Sass), CSS animations/transitions
- JavaScript: ES6 modules, jQuery, fullPage.js (v2.x)
- Build: Gulp 3, Browserify, Babel 6, Autoprefixer, cssnano, Uglify
- Linting: ESLint (legacy ruleset)
- Assets: SVG, PNG icons
- External APIs/CDNs: GitHub REST API (public), Font Awesome CSS CDN

## Repository Structure

```
.
├─ index.html                # Entry HTML with two sections: avatar + intro
├─ gulpfile.js               # Gulp 3 tasks: styles, scripts, images, webserver
├─ package.json              # Legacy dependencies and scripts
├─ src/
│  ├─ js/
│  │  ├─ app.js             # Bootstraps fullPage.js and GitHub fetch
│  │  ├─ constants.js       # UI class names, API URL, fallback avatar path
│  │  ├─ fetch-github-api.js# $.get to GitHub, success/failure handlers
│  │  └─ fullpage-config.js # fullPage.js init + nav behavior
│  ├─ scss/
│  │  ├─ styles.scss        # Imports base, utils, components, plugin overrides
│  │  ├─ _base.scss         # Base elements
│  │  ├─ _utils.scss        # Utility classes
│  │  ├─ _variables.scss    # Colors, fonts
│  │  ├─ components/        # Avatar, Intro, Loader, Link styles
│  │  └─ plugins/_full-page-js.scss # vendored plugin CSS + tweaks
│  └─ images/               # Favicons
└─ build/                   # Prebuilt css/js + images used by index.html
```

## Local Development

Prebuilt assets exist in `build/`, so you can open `index.html` directly in a browser to preview.

For live reload and rebuilding (requires legacy toolchain):

1) Use Node 14 for Gulp 3 compatibility. With nvm:
   - `nvm use` (auto-picks Node 14 via `.nvmrc`), or install with `nvm install 14`.
2) Install dependencies: `npm install`.
3) Start dev tasks + webserver: `gulp` (serves at http://localhost:3000 with watch).
4) Deploy bundle (minified): `gulp deploy` (serves at http://localhost:3001).

Notes:
- This repo prefers npm over Yarn. Yarn lockfile has been removed; use npm scripts such as `npm run lint` and `npm run lint -- --watch`.
- Gulp 3 is incompatible with modern Node (e.g., v18+). Stick to Node 14 (see `.nvmrc`) until the build is migrated.

Note: The site fetches `https://api.github.com/users/konekoya` at runtime; if the request is throttled or blocked, a fallback avatar is used (see Findings below).

## Runtime Flow

High-level behavior of the page from load to interactive UI.

```mermaid
flowchart TD
  A[DOMContentLoaded] --> B[KONEKOYA.init()]
  B --> C[FullpageConfig.Initialize()]
  C --> C1[Invoke $('#fullpage').fullpage(...)]
  C1 --> C2[afterLoad: add .intro--is-active]
  B --> D[FetchGitHubApi.fetch(API_URL)]
  D -->|$.get success| E[Set .avatar__img src to avatar_url]
  D -->|$.get fail| F[Set .avatar__img src to fallback]
  E --> G[Add .window--is-loaded to <body>]
  F --> G
  G --> H[CSS transitions reveal loader/nav/content]
```

## Investigation Findings

- Missing fallback image
  - `FALLBACK_AVATAR_URL` points to `build/images/joshua-pic.jpeg`, which does not exist in the repo. The failure path will set a broken image.
- Gulp config typo
  - `config.fullpageCss` is `./node_mdoules/fullpage.js/dist/jquery.fullpage.min.css` (misspelled `node_modules`). This means vendor CSS isn’t bundled from `node_modules`. The repo currently vendors plugin styles in `src/scss/plugins/_full-page-js.scss`, so the site still works.
- Logging buglet in `gulpfile.js`
  - The helper `log(msg)` uses `msg(item)` when iterating object keys; this should be `msg[item]`. It’s not hit because callers pass strings.
- Legacy/Outdated tooling
  - Gulp 3, Babel 6, Autoprefixer browsers option, Husky v0.13.3 — all dated and may have security advisories. Consider upgrading.
- External dependency risk
  - Unauthenticated GitHub API requests may be rate-limited; Font Awesome is loaded from a public CDN. Both affect reliability offline.

## Modernization Plan (Proposed)

Target: Move to a modern, lightweight stack with minimal runtime deps.

- Build & Dev Server
  - Vite (ESBuild) + TypeScript (optional) for fast dev/build.
- UI Framework
  - React 18 + functional components. Replace fullPage.js with CSS scroll snapping or a modern React router/scroll library if needed.
- Styling
  - SCSS retained or migrate to CSS Modules/TailwindCSS. Keep existing design tokens from `_variables.scss`.
- Data Fetching
  - `fetch` API with graceful fallback; optional GitHub personal access token (public) to reduce rate limits.
- Linting & Format
  - ESLint (flat config) + Prettier. Add simple CI (GitHub Actions) to lint and build on PRs.
- Assets
  - Bundle icons locally; prefer inline SVGs over external CSS icon fonts.

Phased Roadmap:

1) Stabilize current repo
   - Add actual fallback avatar image and fix `gulpfile.js` typos for short-term reliability.
2) Vite bootstrap
   - Create a Vite + React + TS app under `web/`, move `index.html` content into React components, preserve existing styles initially.
3) Replace jQuery/fullPage.js
   - Implement sections with semantic components and CSS scroll-snap; add intersection observers for reveal classes.
4) Cleanup
   - Remove Gulp/Browserify/Babel 6; migrate lint rules; add GitHub Actions.

## Next‑Gen App (Vite + React + TS)

- Location: `web/`
- Node: `nvm use` inside `web/` (uses Node 20 via `.nvmrc`)
- Commands:
  - `npm install`
  - `npm run dev` (dev server)
  - `npm run build` / `npm run preview`

Note: The legacy root uses Node 14 (root `.nvmrc`) for Gulp 3, while the new Vite app uses Node 20 (per `web/.nvmrc`).

## Contributing

PRs that improve reliability (bug fixes, missing assets) or help the migration are welcome.
