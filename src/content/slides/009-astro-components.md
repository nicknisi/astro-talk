---
title: 'Astro Components'
subtitle: 'Native `.astro` components combine HTML templates with JS'
type: 'content'
order: 9
---

```astro
---
// Component Script (runs at build time or request time - SSG or SSR)
import { getFrameworks } from '../data/frameworks';
const frameworks = await getFrameworks();
---
<!-- HTML, but with JSX syntax -->
<h1>Modern CSS Frameworks</h1>
<ul>
  {frameworks.map(framework => (
    <li>{framework.name}</li>
  ))}
</ul>
```
