---
title: Starting a journal, the Astro way
description: Why I added a dedicated blog section to the site, how it is wired, and what to expect here.
date: 2026-11-08
tags: [meta, astro, writing]
---

This is the first post on the new writing section. The resume site stays where
it was. This journal lives at `/writing/` as its own Astro build, pre-rendered
to static HTML for SEO and dropped in next to the React bundle at deploy time.

## Why Astro

- Content collections map cleanly onto a "journal" plus "notes" model.
- Every page is real HTML. Crawlers and social previews get the full story.
- Markdown with frontmatter is the right authoring format for long-lived writing.

## What to expect

Posts about problems worth remembering: database tuning, infra decisions that
survived contact with production, ML workflows that actually paid off, and the
occasional short note.
