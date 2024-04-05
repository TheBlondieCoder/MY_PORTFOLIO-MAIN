import React from "react";

// Define the logErrorToMyService function outside the class
function logErrorToMyService(error, errorInfo) {
  // Implementation of how you log errors to your service
  // e.g., sending the error to your server or a service like Sentry
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong.</h2>;
    }

    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
