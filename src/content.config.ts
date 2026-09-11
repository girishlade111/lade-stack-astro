import { defineCollection, z } from 'astro:content';

// Blog collection: supports per-locale content folders (en/, zh/, ru/, ja/, ko/, tr/, pt-BR/)
// Frontmatter schema is shared across all locales.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    relatedApps: z.array(z.string()).default([]),
    author: z.string().default('Girish Lade'),
    category: z.string(),
    readTime: z.coerce.number(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
