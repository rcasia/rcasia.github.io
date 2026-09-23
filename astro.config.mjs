import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricardocasia.com',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/blog/2026/': '/blog/',
    '/blog/tag/*': '/blog/',
    '/blog/category/*': '/blog/',
    '/projects/neotest-java/': 'https://github.com/rcasia/neotest-java',
    '/projects/neotest-bash/': 'https://github.com/rcasia/neotest-bash',
    '/projects/ascii-ui-nvim/': 'https://github.com/ascii-ui/ascii-ui.nvim',
  },
  image: {
    remotePatterns: [],
  },
});
