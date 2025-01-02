// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://digital-debris.netlify.app',
  integrations: [preact()],
})