// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mounted as a subpath of the main site. The resume lives at '/', this app at '/blog/'.
// Site output goes to ../dist/blog so the existing GitHub Pages workflow (which
// deploys ../dist) picks it up without changes.
export default defineConfig({
  site: 'https://maifeeulasad.github.io',
  base: '/writing',
  trailingSlash: 'always',
  outDir: '../dist/writing',
  build: {
    assets: 'assets',
    format: 'directory',
  },
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
