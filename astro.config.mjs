// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),

  markdown: {
    shikiConfig: {
      theme: "plastic", // alternatives I like: catppuccin-macchiato, slack-dark
    },
  },

  integrations: [tailwind(), preact(), mdx()],
});
