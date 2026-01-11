# philippeserhal.com

My personal website and blog at [philippeserhal.com](https://philippeserhal.com).

## Tech Stack

Built with [Astro](https://astro.build) for static site generation, using Preact for interactive components and Tailwind CSS for styling. Content is written in MDX.

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Testing & Linting

```bash
pnpm test      # runs format check, lint, and type checking
pnpm test:e2e  # runs end-to-end tests with Playwright
pnpm lint      # eslint
pnpm format    # prettier
```

### E2E Tests

E2E tests run against the Netlify deploy preview in CI. For local testing, first start the dev server or build and serve the site, then run tests with the base URL:

```bash
# Option 1: Test against dev server
pnpm dev  # in one terminal
PLAYWRIGHT_TEST_BASE_URL=http://localhost:4321 pnpm test:e2e  # in another

# Option 2: Test against production build
pnpm build
npx http-server dist -p 4321 -s  # in one terminal
PLAYWRIGHT_TEST_BASE_URL=http://localhost:4321 pnpm test:e2e  # in another
```

## Deployment

Deployed to Netlify. Pushes to main trigger automatic builds.
