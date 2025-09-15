import { HeroSection } from "@/components/sections/HeroSection";
import { lazy, Suspense } from "react";
import { LazySection } from "@/components/sections/LazySection";

// Critical sections loaded immediately
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";

// Non-critical sections loaded lazily
const ResultsSection = lazy(() => import("@/components/sections/ResultsSection").then(module => ({ default: module.ResultsSection })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(module => ({ default: module.PricingSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(module => ({ default: module.GuaranteeSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(module => ({ default: module.FAQSection })));

const LandingPage = () => {
  return (
    <div className="min-h-screen font-body">
      {/* Critical above-the-fold content */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      
      {/* Lazy loaded below-the-fold sections */}
      <LazySection>
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 animate-pulse"></div>}>
          <ResultsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-green-50 to-green-100 animate-pulse"></div>}>
          <PricingSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-yellow-50 to-yellow-100 animate-pulse"></div>}>
          <GuaranteeSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-purple-50 to-purple-100 animate-pulse"></div>}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse"></div>}>
          <FAQSection />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default LandingPage;