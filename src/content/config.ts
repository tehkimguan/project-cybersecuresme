import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['en', 'ms']),
    author: z.string().default('Cyber Secure SME editorial team'),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    altLocaleSlug: z.string().optional(),
    hero: z.string().optional(),
    heroCaption: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
