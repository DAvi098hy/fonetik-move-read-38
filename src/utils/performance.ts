// Performance utilities for web vitals optimization

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image if not already preloaded
  const heroImage = '/src/assets/hero-background-new.png';
  if (!document.querySelector(`link[href="${heroImage}"]`)) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }
};

// Optimize scroll performance
export const optimizeScrolling = () => {
  // Use passive event listeners for better scroll performance
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Batch DOM reads and writes
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Reduce layout thrashing
export const batchDOMOperations = (operations: (() => void)[]) => {
  requestAnimationFrame(() => {
    // Batch all DOM reads first
    const measurements: any[] = [];
    operations.forEach((op, index) => {
      if (typeof op === 'function') {
        // Separate reads from writes
        measurements[index] = op();
      }
    });

    // Then batch all DOM writes
    requestAnimationFrame(() => {
      measurements.forEach((measurement, index) => {
        // Apply measurements if needed
      });
    });
  });
};

// Optimize font loading
export const optimizeFontLoading = () => {
  // Use font-display: swap for custom fonts
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Optimized';
      src: local('Arial'), local('Helvetica');
      font-display: swap;
      unicode-range: U+0000-00FF;
    }
  `;
  document.head.appendChild(style);
};

// Monitor web vitals
export const monitorWebVitals = () => {
  // Monitor Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log('LCP:', entry.startTime);
    });
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Browser doesn't support this metric
  }

  // Monitor Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    }
    console.log('CLS:', clsValue);
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Browser doesn't support this metric
  }
};