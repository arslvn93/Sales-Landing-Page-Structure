import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ScarcitySection from "@/components/ScarcitySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import { initializeAnimations } from "@/assets/animation";

const HomePage = () => {
  useEffect(() => {
    // Initialize GSAP animations when component mounts
    initializeAnimations();
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <GuaranteeSection />
      <ScarcitySection />
      <CtaSection />
      <Footer />
      <StickyMobileCta />
    </div>
  );
};

export default HomePage;
