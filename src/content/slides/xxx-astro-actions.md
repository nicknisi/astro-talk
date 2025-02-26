---
title: 'Astro Actions'
type: 'content'
order: 99
---

### Like endpoints, but types shared between front end and back end

<div class="flex gap-6">

- Server-side functions with full TypeScript safety
- Handle form submissions and data mutations
- Define with `defineAction()` and import from `astro:actions`
- Alternative to traditional API endpoints
- Built-in error handling and type validation
- Seamless client-server communication
- Similar concept to React's Server Actions

```typescript
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input, context) => {
      return `Hello, ${input.name}!`
    }
  });
}
 ``` 
</div>
