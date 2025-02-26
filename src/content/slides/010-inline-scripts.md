---
title: 'Inline Scripts'
type: 'content'
order: 10
---

<div class="flex gap-6">
<div class="grow-0 shrink">

- Add client-side JavaScript directly in Astro components using standard `<script>` tags
- Scripts support TypeScript out of the box
- By default, scripts are processed, bundled, and optimized automatically
- Control script behavior with directives
- `define:vars` automatically implies `is:inline` and creates a unique script for each component instance
- Scripts without directives are hoisted, deduplicated, and bundled for optimal performance

</div>

<div class="grow shrink-0">

```html
<script>
    // Hoisted, bundled, and optimized automatically
    console.log("This runs in the browser");
</script>
<script is:inline>
    // Untouched and unbundled, appears exactly as written
    console.log("Runs as-is in the browser");
</script>
<script define:vars={{ serverData }}>
    // Access server-side variables in client code
    console.log(serverData);
</script>
<script type="module">
    // Use ES modules, imports, and top-level await
    import { animate } from './animations.js';
    await animate(document.body);
</script>
```

</div>

</div>
