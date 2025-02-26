---
title: 'Component Island Directives'
subtitle: 'Deciding when component islands are rendered'
type: 'content'
order: 8
---

<div class="flex gap-6">

- Islands architecture allows interactive UI components to exist within static HTML
- Client directives control when and how components are hydrated on the client side
- Each directive offers different loading strategies based on user interaction patterns
- Strategically applying directives improves performance by prioritizing critical UI
- Each island loads independently, allowing targeted interactivity without bloating the page
- Components can be hydrated based on viewport visibility, browser idle time, or media queries
- Create custom directives for specialized loading strategies specific to your application needs


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

</div>
