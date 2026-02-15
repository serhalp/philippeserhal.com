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
      blueskyPostUri: z.string().optional(),
    }),
});

export const collections = {
  articles,
};
