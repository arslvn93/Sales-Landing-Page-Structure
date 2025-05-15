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
      
      {/* Simple hero section for testing */}
      <div className="bg-secondary text-white p-8 mb-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">6-Month Lead Machine</h1>
          <p className="text-xl mb-4">Generate consistent leads in 6 months or less</p>
          <button className="bg-accent text-secondary font-bold py-2 px-6 rounded">
            Get Started
          </button>
        </div>
      </div>

      {/* Original components - adding back one by one */}
      <HeroSection />
      
      {/* Components still commented out for now */}
      {/*
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
      */}
    </div>
  );
};

export default HomePage;
