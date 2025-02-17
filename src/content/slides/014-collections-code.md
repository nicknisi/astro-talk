---
title: 'Content Collections'
type: 'content'
order: 14
---

Use [Zod](https://zod.dev/) to define your content schemas.


```typescript
// content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional()
  })
});
export const collections = { blog };
```
