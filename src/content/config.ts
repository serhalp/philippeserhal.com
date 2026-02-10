import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
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
    }),
});

const externalArticles = defineCollection({
  type: "data",
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
