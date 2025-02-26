---
title: 'Server Islands'
type: 'image-content'
image: '@/assets/server-island-component.png'
order: 21
---

- Extend Astro's islands architecture to server-side rendering
- Use the `server:defer` directive to transform components into server islands that load after initial HTML
- Enable progressive rendering of components that require heavy processing or data fetching
- Improve perceived performance by prioritizing critical content while deferring less important parts
- Components with `server:defer` can access server-only features like cookies and headers
- Requires an SSR adapter (like @astrojs/vercel or @astrojs/node) to function

```html
<Skeets limit={3} server:defer>
    <h3 slot="fallback">Loading Latest Bluesky posts...</h3>
</Skeets>
```
