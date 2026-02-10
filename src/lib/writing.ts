import { getCollection } from "astro:content";

type WritingEntry = {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  href: string;
  isExternal: boolean;
  externalLabel?: string;
};

export const getWritingEntries = async (): Promise<WritingEntry[]> => {
  const articles = await getCollection("articles");
  const externalArticles = await getCollection("external-articles");

  const internalEntries = articles.map((article) => ({
    id: article.id,
    title: article.data.title,
    description: article.data.description,
    pubDate: article.data.pubDate,
    href: `/articles/${article.slug}`,
    isExternal: false,
    externalLabel: undefined,
  }));

  const externalEntries = externalArticles.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.pubDate,
    href: entry.data.external.url,
    isExternal: true,
    externalLabel: entry.data.external.label,
  }));

  return [...internalEntries, ...externalEntries].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf(),
  );
};
