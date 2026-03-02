import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string().default("Philippe Serhal"),
      ogImage: image().optional(),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
      external: z
        .object({
          url: z.string(),
          label: z.string(),
        })
        .optional(),
      blueskyPostUri: z.string().optional(),
      hidden: z.boolean().optional(),
    }),
});

const externalArticles = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/external-articles",
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    external: z.object({
      url: z.string().url(),
      label: z.string(),
    }),
  }),
});

export const collections = {
  articles,
  "external-articles": externalArticles,
};
