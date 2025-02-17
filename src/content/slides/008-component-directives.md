---
title: 'Component Island Directives'
subtitle: 'Deciding when component islands are rendered'
type: 'content'
order: 8
---

```html
<!-- load on page load -->
<MyComponent client:load />
<!-- Load once the rest of the page is done loading -->
<MyComponent client:idle />
<!-- Load once component is visible in user's viewport -->
<MyComponent client:visible />
<!-- Load whenever specific media query is met -->
<MyComponent client:media={QUERY} />
<!-- Skip HTML rendering and client loads the JS -->
<MyComponent client:only="react" />
<!-- Server Islands - render on-demand outside the scope of the page -->
<MyComponent server:defer />
```
