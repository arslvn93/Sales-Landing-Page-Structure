import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SalesLetterSection from "@/components/SalesLetterSection";
import WhyOfferingSection from "@/components/WhyOfferingSection";
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
      {/* Navbar component */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sales Letter Section - Traditional sales letter format */}
      <SalesLetterSection />
      
      {/* Social Proof / Testimonials Section moved up */}
      <TestimonialsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Features Section (What's Included) */}
      <FeaturesSection />
      
      {/* Scarcity/Limited Spots Section moved higher */}
      <ScarcitySection />
      
      {/* Value Comparison Section */}
      <ComparisonSection />
      
      {/* Additional trust-building section */}
      <GuaranteeSection />
      
      {/* CTA Section with pricing and FAQ */}
      <CtaSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile sticky CTA */}
      <StickyMobileCta />
    </div>
  );
};

export default HomePage;
