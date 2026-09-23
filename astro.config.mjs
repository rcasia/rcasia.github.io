import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricardocasia.com',
  output: 'static',
  // Astro 7 changed the compressHTML default from `true` to `'jsx'` (strips
  // whitespace between inline elements, like React). Pin to `true` to
  // preserve v5/v6 output exactly and avoid words gluing together in prose.
  compressHTML: true,
  integrations: [sitemap()],
  redirects: {
    '/blog/2026/': '/blog/',
    '/blog/tag/*': '/blog/',
    '/blog/category/*': '/blog/',
  },
  image: {
    remotePatterns: [],
  },
});
