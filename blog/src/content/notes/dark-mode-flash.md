---
title: Preventing dark mode flash on static sites
description: A three-line inline script in <head> that sets the theme before first paint.
date: 2026-11-07
tags: [css, html, ux]
---

The flash of incorrect theme happens because stylesheets apply before any
script that reads `localStorage` has a chance to run. The fix is to read it
synchronously, inline, in `<head>`:

```html
<script>
  try {
    var t =
      localStorage.getItem('theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
</script>
```

Put it before the stylesheet link, keep the whole payload tiny, and never move
it into an external file.
