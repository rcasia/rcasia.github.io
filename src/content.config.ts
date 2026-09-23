import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    redirect: z.string().optional(),
    external_source: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    importance: z.number().default(99),
    category: z.string().default('open-source'),
    github: z.string().url().optional(),
    tech: z.array(z.string()),
  }),
});

export const collections = { blog, projects };
