# Agent Guidelines for This Repo

Scope: Entire repository. These guidelines apply to all changes unless a more specific AGENTS.md is added under a subdirectory.

## Tech + Tooling

- Primary app lives at repo root (Vite + React + TypeScript, Node 22 via `.nvmrc`).
- CI via GitHub Actions at `.github/workflows/ci.yml`.
- CI runs format check, lint, typecheck, and build on PRs; pushes to `master` build and deploy to GitHub Pages.
- Do not re-introduce the legacy Gulp stack.

## Coding Conventions

- Language: TypeScript. Prefer explicit types at public boundaries; allow inference internally.
- React: Functional components with hooks. Avoid class components.
- Exports: Prefer named exports. Reserve default exports for top-level pages only.
- Styles: CSS Modules (`*.module.css`). Keep component-specific styles local; avoid global CSS except for resets/tokens.
- State: Local state with hooks; lift state only when needed. No external state library unless justified by scale.
- Fetching: Use `fetch` with proper error handling and fallbacks. Avoid jQuery.
- Accessibility: Provide `aria-*` labels, semantic tags, and keyboard focus states.
- Assets: Put static assets in `public/` if they must be served as-is; otherwise import via modules.

## Project Structure

- `src/` — Components, styles (CSS Modules), entry.
- `src/components/` — Reusable UI components.
- `src/pages/` — Page-level composition (if needed later).
- `src/styles/` — Global tokens or variables (CSS variables), minimal usage.
- `public/` — Static assets served as-is.

## Quality

- Lint/Build: Ensure `npm run build` passes before proposing large changes.
- ESLint: `npm run lint` must pass with no warnings.
- TypeScript: `npm run typecheck` must pass.
- Formatting: `npm run format:check` must pass (CI enforces this).
- Tests: If adding tests, colocate them (`*.test.tsx`). Keep them fast and focused.
- Commits: Use concise, conventional messages (feat, fix, chore, docs, ci, refactor, perf, test).

## PR Etiquette

- Keep PRs scoped and reviewable.
- Include a short summary of changes and rationale.
- Note any user-visible changes and migration steps.
