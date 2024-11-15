import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../cache',
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
  },
});
