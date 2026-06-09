import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sentry from '@sentry/astro';

export default defineConfig({
  site: 'https://dbblprotocol.org',
  output: 'static',
  integrations: [
    sentry({
      dsn: 'https://de87fccee752dca5b473187aaaec13b1@o4511534164279297.ingest.us.sentry.io/4511534218412032',
      sourceMapsUploadOptions: {
        project: 'dbbl-site',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
