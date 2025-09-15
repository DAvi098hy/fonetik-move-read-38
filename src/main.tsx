import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadCriticalResources, optimizeScrolling, monitorWebVitals } from "./utils/performance";

// Initialize performance optimizations
preloadCriticalResources();
optimizeScrolling();

// Monitor web vitals in production
if (import.meta.env.PROD) {
  monitorWebVitals();
}

// Performance optimizations
const rootElement = document.getElementById("root");
if (rootElement) {
  // Use concurrent features for better performance
  const root = createRoot(rootElement);
  
  // Use scheduler API for better performance during hydration
  if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
    (window as any).scheduler.postTask(() => {
      root.render(<App />);
    }, { priority: 'user-blocking' });
  } else if ('requestIdleCallback' in window) {
    // Fallback to requestIdleCallback
    requestIdleCallback(() => {
      root.render(<App />);
    }, { timeout: 100 });
  } else {
    // Fallback for browsers without modern scheduling APIs
    root.render(<App />);
  }
}
