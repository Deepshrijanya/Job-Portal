// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://61be690d58bc2bac62d6354396b6797b@o4508933136842752.ingest.de.sentry.io/4508933143527504",
  integrations: [
    Sentry.mongooseIntegration()
  ],
});