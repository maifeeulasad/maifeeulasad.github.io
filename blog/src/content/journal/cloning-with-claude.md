---
title: "Cloning a site I liked with Claude Code: a write-up"
description: "How I used Claude Code to port the sidebar + journal layout from agusmakmun.github.io onto my own React site without touching my resume, and the design decisions along the way."
date: 2026-11-08
tags: [meta, claude-code, astro, process]
---

I came across [Agus Makmun's personal site](https://agusmakmun.github.io)
([source on GitHub](https://github.com/agusmakmun/agusmakmun.github.io)) and
loved the layout: a left sidebar profile, a numbered journal on the right, a
Compact / Expanded toggle, dark mode, ⌘K search, and real HTML pages for SEO.
I wanted the same thing on my own site — but my site is a React resume built
with Vite, not a Jekyll blog, and I did not want to rewrite it.

So I sat down with [Claude Code](https://claude.com/claude-code) and asked it
to port the feature over. This is the story of how it went.

## The constraint

My existing React site is a single page with lots of care put into it. Hero,
About, Experience, Education, Projects, FAQ, Publications, Patents, Awards,
Skills, Footer. I wanted:

- My resume page completely untouched.
- A new writing section that **looked** like Agus's journal.
- Multiple collections (I want a `journal` for long pieces and `notes` for
  short ones — this was my spin, not his site's model).
- Real pre-rendered HTML for SEO.
- One deploy, one domain.

## What Claude Code proposed

Rather than cram a blog into the React bundle or move to Next.js, we went
with a side-by-side approach:

- The resume stays at `/` as the same Vite + React 19 build.
- A new Astro project under `blog/` builds to `../dist/blog`, so the existing
  GitHub Pages workflow already deploys it.
- Content lives in `blog/src/content/{journal,notes}/*.md` with frontmatter.
- One file, `blog/src/config/site.ts`, drives the whole sidebar and the
  collection list. Adding a new section is three lines of config.
- Every page is static HTML. The crawlers and the social preview cards see
  the full story without JavaScript.

```yaml
# pnpm-workspace.yaml
packages:
  - '.'
  - blog
```

```jsonc
// package.json
"scripts": {
  "build": "tsc -b && vite build && pnpm --filter blog build"
}
```

```js
// blog/astro.config.mjs
export default defineConfig({
  base: '/blog',
  outDir: '../dist/blog',
});
```

That is the whole integration. No router shim, no proxy, no cross-origin, no
CI changes.

## What I ported from Agus and what I changed

**Ported verbatim** (with credit): the CSS design system. The entire
`static/css/site.css` is a well-tuned set of CSS variables, typography scale
and layout rules — reinventing that would take weeks and would be worse. I
copied it as `blog/src/styles/journal.css` and left it alone. The small
vanilla `site.js` that drives the dark-mode toggle, the Compact / Expanded
switcher, the ⌘K search dialog, the code-block copy buttons and the scroll-spy
table of contents also came across as-is.

**Rebuilt in Astro**: every template. Jekyll's `{% for %}` and `{% include %}`
became Astro components (`Sidebar.astro`, `PostRow.astro`, `Pager.astro`,
`PostList.astro`, `BaseLayout.astro`). Jekyll's `paginator` became
`getStaticPaths`.

**Changed on purpose**:

- Configurable collections instead of a single "Stack Solutions" feed. I
  wanted `journal` and `notes` separately, and the sidebar list to know their
  live counts. `blog/src/config/site.ts` makes this one place.
- A mixed landing at `/blog/` that merges both collections newest-first, plus
  per-collection landings at `/blog/journal/` and `/blog/notes/`.
- SEO via Astro's built-in site metadata + `BlogPosting` JSON-LD and a
  sitemap integration, rather than `jekyll-seo-tag`.

## What Claude Code did well

- It read Agus's Jekyll templates and `_config.yml` first, instead of guessing.
  That saved me explaining the structure.
- It proposed the sub-project-in-`/blog/` approach after I nudged it away
  from "rewrite everything in Astro" — which it had suggested first. A
  less patient agent would have insisted on the rewrite.
- It committed in small steps as I asked ("directly work on main, with mini
  commits and push, so that i can check on live"), so I could watch the
  deploy evolve on GitHub Pages between turns.
- When the first build failed because Astro extracts `getStaticPaths` into a
  separate module context and could not see a file-scoped `PER_PAGE`, Claude
  diagnosed it from the stack trace and moved the constant inside the
  closure rather than papering over it.

## What I had to push on

- It initially offered `react-helmet-async` + SPA as one of the SEO options.
  That is not real SEO. I picked the SSG route and in hindsight should not
  have offered the other as an option at all.
- The first scaffold tried to pull the blog into the main React app with
  `react-router-dom` + a pre-render plugin. I asked for a dedicated `blog/`
  directory instead, which turned out to be much cleaner.

## Credits

- **Design, CSS and layout** © [Agus Makmun](https://agusmakmun.github.io) —
  original Jekyll source at
  [agusmakmun/agusmakmun.github.io](https://github.com/agusmakmun/agusmakmun.github.io).
  The `journal.css` file here is his `static/css/site.css` ported directly;
  please check his repo's license before reusing for your own site.
- **Material Symbols** by Google (Apache 2.0).
- **Brand SVGs** from Simple Icons (CC0).
- **Astro**, **React**, **Vite**, **pnpm** — the plumbing.
- **Claude Code** — the collaborator that did the heavy lifting on the port,
  and wrote this very post once I asked it to.

If you clone this layout too, credit Agus.
