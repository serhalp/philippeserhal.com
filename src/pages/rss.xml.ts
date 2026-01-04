import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

export async function GET(context: APIContext) {
  // Get the URL to prepend to relative site links.
  let baseUrl = context.site?.href || "https://philippeserhal.com";
  if (baseUrl.at(-1) === "/") baseUrl = baseUrl.slice(0, -1);

  // Load MDX renderer.
  const renderers = await loadRenderers([getMDXRenderer()]);

  // Create a new Astro container that we can render components with.
  const container = await AstroContainer.create({ renderers });

  // Load the articles collection.
  const articles = (await getCollection("articles")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const feedItems = [];
  for (const article of articles) {
    // Get the <Content /> component.
    const { Content } = await render(article);
    // Render to string.
    const rawContent = await container.renderToString(Content);

    // Process and sanitize content.
    const content = await transform(
      rawContent.replace(/^<!DOCTYPE html>/, ""),
      [
        async (node) => {
          await walk(node, (node) => {
            if (node.name === "a" && node.attributes.href?.startsWith("/")) {
              node.attributes.href = baseUrl + node.attributes.href;
            }
            if (node.name === "img" && node.attributes.src?.startsWith("/")) {
              node.attributes.src = baseUrl + node.attributes.src;
            }
          });
          return node;
        },
        sanitize({ dropElements: ["script", "style"] }),
      ],
    );

    feedItems.push({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/articles/${article.slug}/`,
      content,
    });
  }

  return rss({
    title: "Philippe Serhal — Software Engineer",
    description:
      "Philippe Serhal is an experienced Software Engineer. He makes computers solve problems.",
    site: baseUrl,
    items: feedItems,
    customData: `<language>en-us</language>`,
  });
}
