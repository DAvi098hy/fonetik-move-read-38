import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Performance optimizations
const rootElement = document.getElementById("root");
if (rootElement) {
  // Use concurrent features for better performance
  const root = createRoot(rootElement);
  
  // Wrap render in requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      root.render(<App />);
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      root.render(<App />);
    }, 1);
  }
}
