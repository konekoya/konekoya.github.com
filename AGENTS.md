# Agent Guidelines for This Repo

Scope: Entire repository. These guidelines apply to all changes unless a more specific AGENTS.md is added under a subdirectory.

## Tech + Tooling

- Primary app is under `web/` (Vite + React + TypeScript, Node 20).
- Deploy via GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
- Do not re-introduce the legacy Gulp stack or root `index.html`.

## Coding Conventions (web/)

- Language: TypeScript. Prefer explicit types at public boundaries; allow inference internally.
- React: Functional components with hooks. Avoid class components.
- Exports: Prefer named exports. Reserve default exports for top-level pages only.
- Styles: CSS Modules (`*.module.css`). Keep component-specific styles local; avoid global CSS except for resets/tokens.
- State: Local state with hooks; lift state only when needed. No external state library unless justified by scale.
- Fetching: Use `fetch` with proper error handling and fallbacks. Avoid jQuery.
- Accessibility: Provide `aria-*` labels, semantic tags, and keyboard focus states.
- Assets: Put static assets in `web/public/` if they must be served as-is; otherwise import via modules.

## Project Structure (web/)

- `src/components/` — Reusable UI components.
- `src/pages/` — Page-level composition (if needed later).
- `src/styles/` — Global tokens or variables (CSS variables), minimal usage.

## Quality

- Lint/Build: Ensure `npm run build` passes before proposing large changes.
- Tests: If adding tests, colocate them (`*.test.tsx`). Keep them fast and focused.
- Commits: Use concise, conventional messages (feat, fix, chore, docs, ci, refactor, perf, test).

## PR Etiquette

- Keep PRs scoped and reviewable.
- Include a short summary of changes and rationale.
- Note any user-visible changes and migration steps.

