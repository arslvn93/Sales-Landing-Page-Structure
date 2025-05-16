import { useEffect, useRef } from "react";
import TestComponent from "@/components/TestComponent"; // Import the test component
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
  const initializedRef = useRef(false);
  
  useEffect(() => {
    // Only initialize animations once when component mounts
    if (!initializedRef.current) {
      console.log('HomePage mounted, initializing animations...');
      
      // Wait for DOM to be fully rendered
      setTimeout(() => {
        initializeAnimations();
        initializedRef.current = true;
      }, 100);
    }
    
    // Clean up any animations or event listeners when component unmounts
    return () => {
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        console.log('HomePage unmounted, cleaning up animations');
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Add test component first to verify rendering */}
      <TestComponent />
      
      {/* Add actual Navbar component */}
      <Navbar />
      
      {/* Original HeroSection component */}
      <HeroSection />
      
      {/* Problem Section with new animations */}
      <ProblemSection />
      
      {/* Solution Section with new animations */}
      <SolutionSection />
      
      {/* How It Works Section with new animations */}
      <HowItWorksSection />
      
      {/* Features Section with new animations */}
      <FeaturesSection />
      
      {/* Testimonials Section with new animations */}
      <TestimonialsSection />
      
      {/* Comparison Section with new animations */}
      <ComparisonSection />
      
      {/* Components still commented out for now */}
      {/*
      <GuaranteeSection />
      <ScarcitySection />
      <CtaSection />
      <Footer />
      <StickyMobileCta />
      */}
    </div>
  );
};

export default HomePage;
