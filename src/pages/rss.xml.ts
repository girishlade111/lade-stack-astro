import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // English-only blog: canonical frontmatter copy (no localized variants exist).
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const container = await AstroContainer.create();
  const items = [];
  for (const post of posts) {
    // Full article body rendered to HTML for content:encoded.
    const { Content } = await render(post);
    const content = await container.renderToString(Content);
    items.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
      content,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
    });
  }

  return rss({
    title: 'Lade Stack Blog',
    description:
      'Expert tutorials, guides, and insights on AI-powered development, API testing, and modern software engineering.',
    site: context.site ?? 'https://ladestack.in',
    items,
  });
}
