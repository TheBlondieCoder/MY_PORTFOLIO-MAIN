import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Include any other necessary imports here...

// Initialize Sentry as early as possible in your application
Sentry.init({
  dsn: "https://42575ee5a1845cb77f90e7fb19a5320d@o4507026101633024.ingest.us.sentry.io/4507026123456517",
  integrations: [
    // Presuming you have defined these integrations correctly elsewhere:
    // Sentry.browserTracingIntegration(),
    // Sentry.replayIntegration({
    //   maskAllText: false,
    //   blockAllMedia: false,
    // }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions for monitoring
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
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
