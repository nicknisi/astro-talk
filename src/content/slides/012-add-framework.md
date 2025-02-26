---
title: 'Adding Frameworks'
type: 'content'
order: 12
---

**Quick Integration**

```bash
npx astro add {FRAMEWORK}
```

**Configuration**

```ts
// astro.config.ts
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
});
```

** Demo Time! **
