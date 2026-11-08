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
  base: '/writing',
  outDir: '../dist/writing',
});
```

Now `pnpm build` writes `dist/` + `dist/writing/`, and GitHub Pages serves both
from the same artifact. No CI changes, no router shim, no cross-origin.

> One gotcha: the first choice of mount point was `/blog/`, which was already
> taken by a separate `username/blog` project repo on the same user page.
> GitHub serves project pages at `username.github.io/<repo>/` and they shadow
> any subpath you push under the user-page repo. Pick a mount that no repo of
> yours owns.
