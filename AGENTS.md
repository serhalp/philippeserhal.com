# Repository Guidelines

## Project Structure & Module Organization

- `src/pages`: Astro route entries (e.g., `index.astro`); keep filenames aligned with final URLs.
- `src/layouts`: Shared document shells for metadata, header/footer framing, and global wrappers.
- `src/components`: Reusable UI; prefer `.astro` for static composition and `.tsx` for interactive pieces (Preact JSX runtime). Keep component files PascalCase.
- `src/styles/global.css`: Tailwind base layers and custom tokens; `tailwind.config.ts` holds theme extensions and animations.
- `public`: Static assets (favicons, manifest) served as-is. Build artifacts land in `dist/` (ignored). Root configs: `astro.config.mjs`, `eslint.config.js`, `tsconfig.json`, `netlify.toml`.

## Build, Test, and Development Commands

- `pnpm install`: Install dependencies (project uses pnpm; lockfile is authoritative).
- `pnpm dev`: Local dev server with HMR (defaults to port 4321 via `netlify.toml`).
- `pnpm build`: Production static build for Netlify (`dist/`).
- `pnpm preview`: Serve the built site locally for release checks.
- `pnpm lint` / `pnpm lint:fix`: ESLint across Astro + Preact; fixes safe issues when requested.
- `pnpm format` / `pnpm format:check`: Prettier (Astro plugin included).
- `pnpm astro:check`: Type and configuration validation for pages/components.
- `pnpm test`: Runs `format:check`, `lint`, and `astro:check` in one gate; use before commits/PRs.

## Coding Style & Naming Conventions

- TypeScript strict; Preact components use JSX runtime (`tsx`). Follow Prettier defaults (2-space indent, semicolons); avoid manual style tweaks and run `pnpm format` before pushing.
- ESLint enforces Astro, Preact, accessibility, and TypeScript rules; keep JSX free of unused imports and a11y violations.
- Components: PascalCase filenames/exports; hooks/utilities (if added) should be camelCase. Routes under `src/pages` should mirror URL slugs (lowercase, hyphenated when multi-word).
- Use Tailwind utilities for layout/spacing; keep bespoke CSS in `global.css` and prefer theme tokens from `tailwind.config.ts`.

## Testing Guidelines

- There are no unit/e2e suites yet; quality gates are formatting, linting, and `astro:check`.
- For UI changes, manually verify responsive behavior in `pnpm dev` and confirm interactive Preact pieces (e.g., `Hero`, `Terminal`) render without console errors.
- If adding tests later, co-locate with features or use `__tests__` folders; keep filenames descriptive and align with component/page names.

## Commit & Pull Request Guidelines

- Commit messages follow a Conventional Commit style seen in history (e.g., `chore(deps): update tailwindcss to v3.4.19`); use meaningful types (`feat`, `fix`, `chore`, `refactor`, `docs`).
- Keep commits scoped and readable; avoid bundling unrelated changes. Include dependency bumps separately.
- PRs should summarize intent, list key changes, and link issues if applicable. Attach before/after screenshots or short clips for visual updates.
- Confirm `pnpm test` passes before opening or merging; note any deviations (e.g., known lint suppressions) in the PR description.
