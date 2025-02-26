---
title: 'View Transitions'
subtitle: '(Client Router)'
type: 'content'
order: 99
---

- Enables smooth, animated page transitions between routes without full page refreshes
- Built on the browser's View Transitions API with a JavaScript fallback for unsupported browsers
- Add with a simple `<ViewTransitions />` component in your layout
- Control animations with directives:
    - `transition:animate` - specify animation type (fade, slide, etc.)
    - `transition:name` - connect elements across pages for morphing effects
    - `transition:persist` - maintain element state during navigation
- Programmatic navigation with `navigate()` function from `astro:transitions/client`
- Works with prefetching for near-instant, animated page transitions
- Preserves scroll position and improves perceived performance

## You are seeing this right here in the slide deck!
