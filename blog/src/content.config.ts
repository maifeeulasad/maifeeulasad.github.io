import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One schema, many collections. To add a new section (e.g. "essays"):
//   1. mkdir blog/src/content/essays
//   2. add `essays: makeCollection('essays')` below
//   3. register it in blog/src/config/site.ts `collections`
// Nothing else needs to change.
const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  image: z.string().optional(),
});

const makeCollection = (id: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${id}` }),
    schema: postSchema,
  });

export const collections = {
  journal: makeCollection('journal'),
  notes: makeCollection('notes'),
};

export type PostSchema = z.infer<typeof postSchema>;
