// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://phamduckhanh.github.io',
  base: '/nanopower-site',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});