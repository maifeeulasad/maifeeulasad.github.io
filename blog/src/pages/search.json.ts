import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { collections, site } from '../config/site';

// The shape the ported site.js search dialog expects: { title, url, date, categories[] }
export const GET: APIRoute = async () => {
  let all: Awaited<ReturnType<typeof getCollection>> = [];
  for (const c of collections) {
    const entries = await getCollection(c.id as 'journal' | 'notes');
    all = all.concat(entries.filter((e) => !e.data.draft));
  }
  all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const index = all.map((post) => ({
    title: post.data.title,
    url: `${site.base}/${post.collection}/${post.id}/`,
    date: post.data.date.toLocaleDateString('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    categories: [post.collection, ...post.data.tags],
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
