import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  'plugins': [
    vue(),
    svgLoader()
  ],
  'resolve': { 'alias': { '@': fileURLToPath(new URL('./src', import.meta.url)) } }
});
