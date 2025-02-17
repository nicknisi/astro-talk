import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(['title', 'content']),
      order: z.number().optional(),
      image: image().optional(),
    }),
});

export const collections = { slides };
