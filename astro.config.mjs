// @ts-check
import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kunalkatre21.github.io',
  base: '/portfolio-astro',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    lottie(), // <-- add integration
  ]
});