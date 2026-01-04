# Repository Guidelines

## Project Structure & Module Organization

- `src/pages`: Astro route entries (e.g., `index.astro`); keep filenames aligned with final URLs.
- `src/content`: Astro Content Collections (e.g., `articles/`).
  - Use a directory-per-post structure: `src/content/articles/<slug>/index.mdx`.
  - Colocate images and assets within the post directory and use ESM imports in MDX for build-time validation and optimization.
  - Collection schemas are defined in `src/content/config.ts`.
- `src/layouts`: Shared document shells for metadata, header/footer framing, and global wrappers.
- `src/components`: Reusable UI; prefer `.astro` for static composition and `.tsx` for interactive pieces (Preact JSX runtime). Keep component files PascalCase.
- `src/styles/global.css`: Tailwind base layers and custom tokens; `tailwind.config.ts` holds theme extensions, animations, and Typography (`prose`) overrides.
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

- **Blog Content:** Use MDX for articles to support semantic `<figure>` tags and optimized image imports.
- **Date Handling:** Always use `timeZone: "UTC"` when formatting article dates (e.g., `toLocaleDateString("en-US", { ..., timeZone: "UTC" })`) to prevent off-by-one errors caused by local build environment offsets.
- **TypeScript:** Strict mode; Preact components use JSX runtime (`tsx`) and state via `@preact/signals`. Follow Prettier defaults.
- **Styling:** Use Tailwind utilities and the `@tailwindcss/typography` (`prose`) plugin for content. Custom `prose` overrides (like centering figures) should live in `tailwind.config.ts`.
- **Navigation:** Header navigation follows an indexed directory style (e.g., `[0] ~/`, `[1] ~/articles`) using monospace fonts to match the terminal aesthetic.

## Testing Guidelines

- There are no unit/e2e suites yet; quality gates are formatting, linting, and `astro:check`.
- For UI changes, manually verify responsive behavior in `pnpm dev` and confirm interactive Preact pieces (e.g., `Hero`, `Terminal`) render without console errors.

## Commit & Pull Request Guidelines

- Commit messages follow a Conventional Commit style (e.g., `feat(blog): add frameworks year in review`); use meaningful types (`feat`, `fix`, `chore`, `refactor`, `docs`).
- PRs should summarize intent and confirm `pnpm test` passes before merging.
