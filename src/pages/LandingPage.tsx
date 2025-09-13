import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen font-body">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <PricingSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default LandingPage;