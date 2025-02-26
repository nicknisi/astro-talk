---
title: 'Prefetching'
type: 'content'
order: 18
---

- Enhances navigation speed by preloading linked pages before users click
- Implemented using `<link rel="prefetch">` for browser compatibility
- Enable with `data-astro-prefetch` attribute on any `<a>` tag
- Multiple prefetching strategies available:
    - `hover` - prefetch when user hovers over a link
    - `viewport` - prefetch when link becomes visible on screen
    - `tap` - prefetch on mobile touch before navigation
    - No value defaults to the site's configuration setting
- Customize default behavior in `astro.config.mjs` with the `prefetch` option
- Reduces perceived loading time between page transitions
- Works seamlessly with Astro's view transitions for smooth navigation experiences
