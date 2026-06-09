import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  site: 'https://dbblprotocol.org',
  output: 'static',
  vite: {
    build: {
      sourcemap: 'hidden',
    },
    plugins: [
      tailwindcss(),
      sentryVitePlugin({
        org: 'the-dbbl-protocol',
        project: 'dbbl-site',
        authToken: process.env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: ['./**/*.map'],
        },
      }),
    ],
  },
});
