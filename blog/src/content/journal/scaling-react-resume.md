---
title: Keeping a React resume fast without turning it into Next.js
description: Vite + static deploy covers 90% of what a personal site needs. Here's what to watch for and when to break your own rule.
date: 2026-10-20
tags: [react, vite, performance]
---

Personal sites get rewritten every eighteen months because someone added
"just one" feature that pulled in a framework. Here is the shortlist I use to
keep mine on plain Vite + React.

## Keep the bundle honest

- `import { X } from 'lib'` is a lie when `lib` has no tree-shaking.
  Check with `vite build --mode=analyze` before adding anything to the
  resume page.
- Lazy-load routes that only visitors to `/writing/` need. The resume page does
  not need the markdown parser.

## Images are the whole budget

Everyone's resume has a hero image, a project screenshot or a diagram. The
single biggest win for a static site is sending a properly sized `.webp` or
`.avif`. Doing this by hand once is faster than pulling in a next/image
equivalent.

## When to break the rule

If more than a quarter of your content is written material that benefits from
SEO, you probably want static HTML on those pages — that is why the writing
section of this site (`/writing/`) runs on Astro and ships as HTML next to
the React bundle.
