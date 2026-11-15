// @ts-check
import { defineConfig } from 'astro/config';

// TODO: set `site` once the domain is decided. If hosting at
// <user>.github.io/<repo> instead of a custom domain, also set `base`.
export default defineConfig({
  site: 'https://example.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
