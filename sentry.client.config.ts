import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://de87fccee752dca5b473187aaaec13b1@o4511534164279297.ingest.us.sentry.io/4511534218412032',
  environment: import.meta.env.MODE,
});
