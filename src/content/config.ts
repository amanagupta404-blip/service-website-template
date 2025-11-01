/**
 * Astro Content Collections Configuration
 * Defines schemas for blog and portfolio collections
 *
 * Collections:
 * - blog: Blog posts with frontmatter metadata
 * - portfolio: Portfolio projects with frontmatter metadata
 */

import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection Schema
 * Fields: title, description, publishDate, author, image, tags, featured
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
    category: z.string().optional(),
  }),
});

/**
 * Portfolio Collection Schema
 * Fields: title, description, client, date, category, images, featured, tags, projectUrl
 */
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    date: z.date(),
    category: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    projectUrl: z.string().optional(),
  }),
});

/**
 * Export collections
 */
export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
