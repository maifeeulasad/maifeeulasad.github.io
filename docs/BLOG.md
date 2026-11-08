# The writing subproject

A dedicated Astro project that renders the writing section of the site. The
source lives under `blog/` in the repo, builds as a workspace package next
to the React resume, and is mounted at `/writing/` on the deployed domain.

> **Why `/writing/` and not `/blog/`?** A separate `maifeeulasad/blog`
> project repo already owns `maifeeulasad.github.io/blog/`. Project pages
> shadow any subpath you push to your user-page repo, so mounting here
> would be invisible. If you free up `/blog/` later, change `base` and
> `outDir` in `blog/astro.config.mjs` and the two scripts in
> `package.json`, then rename `dist/writing` → `dist/blog`.

## Layout

```
maifeeulasad.github.io/
├── src/                         # React resume (unchanged)
├── blog/                        # <- this subproject
│   ├── astro.config.mjs         # base: '/writing', outDir: '../dist/writing'
│   ├── package.json             # astro, @astrojs/rss, @astrojs/sitemap
│   ├── public/
│   │   ├── favicon.svg
│   │   └── js/site.js           # theme toggle, view switcher, ⌘K search
│   └── src/
│       ├── config/site.ts       # SINGLE source of truth for the sidebar
│       ├── content.config.ts    # Content collection definitions
│       ├── content/
│       │   ├── journal/*.md
│       │   └── notes/*.md
│       ├── styles/journal.css   # ported design system (see CREDITS)
│       ├── components/
│       │   ├── BaseLayout.astro replaced by layouts/BaseLayout.astro
│       │   ├── Sidebar.astro    # config-driven
│       │   ├── PostRow.astro
│       │   ├── PostList.astro
│       │   ├── Pager.astro
│       │   ├── BrandIcon.astro
│       │   └── Icons.astro      # trimmed Material Symbols URL
│       ├── layouts/
│       │   └── BaseLayout.astro # SEO: OG, Twitter, JSON-LD, RSS alternate
│       └── pages/
│           ├── index.astro               # mixed feed, page 1
│           ├── page/[page].astro         # mixed feed, pages 2+
│           ├── [collection]/index.astro          # one collection, page 1
│           ├── [collection]/page/[page].astro    # one collection, pages 2+
│           ├── [collection]/[...slug].astro      # single post
│           ├── rss.xml.ts                        # RSS 2.0
│           └── search.json.ts                    # client-side index
└── dist/
    └── writing/          # <- Astro writes here, deploy picks it up
```

## How the two sites deploy together

`pnpm-workspace.yaml` registers both the root and `blog/` as workspace
packages. The root build script runs both builds:

```jsonc
// package.json
"build": "tsc -b && vite build && pnpm --filter blog build"
```

Astro is configured with `outDir: '../dist/writing'`, so its output lands
inside the React build's `dist/`. The existing GitHub Pages workflow
(`.github/workflows/deploy.yml`) uploads `dist/` unchanged. Nothing in CI
needs to know the writing subproject exists.

## Writing a post

1. Create a markdown file in one of the collections:

   - `blog/src/content/journal/<slug>.md` for long-form pieces
   - `blog/src/content/notes/<slug>.md` for short notes

2. Frontmatter:

   ```yaml
   ---
   title: Your post title
   description: One-sentence summary used for excerpts and SEO.
   date: 2026-11-08
   updated: 2026-11-09   # optional
   tags: [tag-one, tag-two]
   draft: false          # optional; drafts are excluded from lists, RSS, search
   image: /writing/og/your-post.png   # optional OG image
   ---

   The post body in markdown. Code fences, headings and the usual GFM work.
   ```

3. `pnpm --filter blog dev` to preview, `pnpm --filter blog build` to build.

The slug comes from the filename. Reading time is computed from the body
length at build time.

## Adding a new collection (e.g. "essays")

Three steps:

1. **Folder** — `mkdir blog/src/content/essays`.

2. **Schema** — add it to `blog/src/content.config.ts`:

   ```ts
   export const collections = {
     journal: makeCollection('journal'),
     notes: makeCollection('notes'),
     essays: makeCollection('essays'),
   };
   ```

3. **Config** — add it to `blog/src/config/site.ts`:

   ```ts
   export const collections: CollectionConfig[] = [
     // ...existing entries
     {
       id: 'essays',
       label: 'Essays',
       title: 'Essays',
       breadcrumb: '~/essays',
       description: 'Longer, more considered pieces.',
       icon: 'article',
       perPage: 10,
       featured: true,
     },
   ];
   ```

   And add it to `sidebarSections` in the same file so the sidebar shows it:

   ```ts
   sidebarSections: [
     { id: 'journal', icon: 'arrow_right', label: 'Journal' },
     { id: 'notes',   icon: 'chevron_right', label: 'Notes' },
     { id: 'essays',  icon: 'chevron_right', label: 'Essays' },
     // ...
   ]
   ```

That's it — pagination, RSS, search index, sidebar count, per-collection
listing and single-post routing all pick it up automatically.

## Customising the sidebar

Everything on the sidebar comes from `blog/src/config/site.ts`:

- `author`, `initials`, `tagline`, `status`, `about` — the profile block
- `profileStats` — the two-cell Focus / Experience box
- `stack` — the Core Technologies pills
- `socials` — the icon strip (uses either `brand` slugs rendered by
  `BrandIcon.astro`, or a Material Symbols `icon` name)
- `sidebarSections` — the "Sections" list at the bottom. An entry with `id`
  pulls its label and count from a collection; an entry with a literal
  `href` + `count` is free-form.

## SEO

- Every page emits a canonical URL, title, description, Open Graph tags,
  Twitter card tags and JSON-LD.
- The home and collection pages ship `WebSite` JSON-LD; single posts ship
  `BlogPosting` with the author, dates and tags.
- `@astrojs/sitemap` writes `sitemap-index.xml` and `sitemap-0.xml` under
  `/writing/`.
- `/writing/rss.xml` is a real RSS 2.0 feed built from all collections.

## Dark mode

A three-line inline script in `<head>` reads the saved theme (or the OS
preference) and sets `data-theme` on `<html>` before first paint. The
toggle in the header updates both the attribute and `localStorage`.

## Search

`/writing/search.json` is a build-time JSON index of all posts' title, url,
date and categories. The ⌘K dialog in `blog/public/js/site.js` fetches it
once per session and filters client-side.

## Commands

| | |
|---|---|
| `pnpm install` | install both apps' deps |
| `pnpm dev:blog` | Astro dev server on :4321 |
| `pnpm dev` | Vite dev server for the React resume |
| `pnpm build` | build **both** — resume to `dist/`, writing to `dist/writing/` |
| `pnpm build:blog` | build the writing subproject only |
| `pnpm build:site` | build the resume only |

## Credits

The visual design, CSS and vanilla JS are a direct port of
[agusmakmun.github.io](https://github.com/agusmakmun/agusmakmun.github.io)
by Agus Makmun. See `blog/CREDITS.md` for the full list.
