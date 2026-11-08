import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site, collections } from '../config/site';

export async function GET(context: APIContext) {
  let all: Awaited<ReturnType<typeof getCollection>> = [];
  for (const c of collections) {
    const entries = await getCollection(c.id as 'journal' | 'notes');
    all = all.concat(entries.filter((e) => !e.data.draft));
  }
  all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${site.title} · ${site.author}`,
    description: site.description,
    site: context.site ?? site.url,
    stylesheet: false,
    items: all.map((post) => ({
      link: `${site.base}/${post.collection}/${post.id}/`,
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.date,
      categories: post.data.tags,
    })),
    customData: `<language>${site.lang}</language>`,
  });
}
