// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // site: 'https://pisa-jsc.github.io',
  // base: '/nanopower-site',
  site: 'https://nanopower.vn',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});