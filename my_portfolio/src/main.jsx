import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { createRoot } from "react-dom/client";
import App from "./App";

// Initialize Sentry as early as possible in your application
Sentry.init({
  dsn: "https://42575ee5a1845cb77f90e7fb19a5320d@o4507026101633024.ingest.us.sentry.io/4507026123456517",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "yourserver.io", /^\//],
      // Note: the above `tracingOrigins` should include any domains your application interacts with
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // Adjust this value in production according to your needs.
  tracesSampleRate: 1.0,
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample at 10% - adjust as needed
  replaysOnErrorSampleRate: 1.0, // Capture 100% of sessions that encounter errors
});

// Select the target container in the DOM
const targetContainer = document.getElementById("root");

// Check if the target container exists and is an instance of HTMLElement
if (targetContainer instanceof HTMLElement) {
  // If so, create a root and render the App component
  createRoot(targetContainer).render(<App />);
} else {
  // If not, log an error or handle as appropriate
  console.error(
    "The target container is not a DOM element. Please check your HTML markup."
  );
}
