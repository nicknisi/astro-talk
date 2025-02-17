import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      type: z.enum(['title', 'content', 'image-content', 'image']),
      order: z.number().optional(),
      hideContent: z.boolean().optional(),
      image: image().optional(),
    }),
});

export const collections = { slides };
