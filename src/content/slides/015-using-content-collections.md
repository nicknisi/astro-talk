---
title: 'Using Content Collections'
type: 'content'
order: 15
---

Access your content with full type safety

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => (
    <li>
      <h2>{post.data.title}</h2>
      <p>By {post.data.author}</p>
    </li>
  ))}
</ul>
```
