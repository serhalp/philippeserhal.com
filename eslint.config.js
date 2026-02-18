// @ts-check

import eslint from "@eslint/js";
import e18e from "@e18e/eslint-plugin";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
// eslint-disable-next-line e18e/ban-dependencies -- removing preact soon
import reactPlugin from "eslint-plugin-react";

// @type {import('eslint').Linter.Config[]}
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  e18e.configs.recommended,
  ...astroPlugin.configs.recommended,
  ...astroPlugin.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
    },
  },
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
);
