import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { lazy, Suspense } from "react";

// Lazy load below-the-fold sections for better performance
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(module => ({ default: module.PricingSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(module => ({ default: module.GuaranteeSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(module => ({ default: module.FAQSection })));

const LandingPage = () => {
  return (
    <div className="min-h-screen font-body">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-blue-50 to-blue-100 animate-pulse"></div>}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-green-50 to-green-100 animate-pulse"></div>}>
        <GuaranteeSection />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-purple-50 to-purple-100 animate-pulse"></div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse"></div>}>
        <FAQSection />
      </Suspense>
    </div>
  );
};

export default LandingPage;