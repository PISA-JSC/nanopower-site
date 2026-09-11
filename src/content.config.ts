import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const solutions = defineCollection({
  loader: glob({ base: './src/content/solutions', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string(),
    order: z.number(),
    cover: z.string(),
    features: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    category: z.enum(['tin-cong-ty', 'kien-thuc', 'san-pham', 'tuyen-dung']),
    author: z.string().default('Nano Power'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    summary: z.string(),
    cover: z.string(),
    year: z.number(),
    results: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { solutions, posts, projects };
