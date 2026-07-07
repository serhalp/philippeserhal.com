// @ts-check

import eslint from "@eslint/js";
import e18e from "@e18e/eslint-plugin";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";

// @type {import('eslint').Linter.Config[]}
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  ...astroPlugin.configs["jsx-a11y-recommended"],
  {
    ignores: [
      // build output
      "dist/",
      // generated files
      ".astro/",
      // dependencies
      "node_modules/",
      // logs
      "pnpm-debug.log*",
      // environment variables
      ".env",
      ".env.production",
      // Local Netlify folder
      ".netlify/",
      // macOS-specific files
      ".DS_Store",
    ],
  },
  e18e.configs.recommended,
];
