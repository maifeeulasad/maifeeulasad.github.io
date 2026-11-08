---
title: A single-site pnpm workspace that still deploys cleanly
description: How to keep the main app and a sub-project (like /blog) in one repo without tangling their builds.
date: 2026-10-30
tags: [pnpm, vite, astro, monorepo]
---

Two apps, one deploy target, one repo. The trick is to make the sub-project
build *into* the main project's `dist/` so the existing deploy pipeline does
not care.

```yaml
# pnpm-workspace.yaml
packages:
  - '.'
  - blog
```

```jsonc
// package.json (root)
{
  "scripts": {
    "build": "tsc -b && vite build && pnpm --filter blog build"
  }
}
```

```js
// blog/astro.config.mjs
export default defineConfig({
  base: '/blog',
  outDir: '../dist/blog',
});
```

Now `pnpm build` writes `dist/` + `dist/blog/`, and GitHub Pages serves both
from the same artifact. No CI changes, no router shim, no cross-origin.
