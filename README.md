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

## Deployment

Deployed to Netlify. Pushes to main trigger automatic builds.
