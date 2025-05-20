import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ThankYouPage from "@/pages/ThankYouPage";

// Global GSAP initialization
function initializeGSAP() {
  if (typeof window !== "undefined") {
    try {
      // Make sure GSAP and ScrollTrigger are available globally
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      
      if (gsap && ScrollTrigger) {
        console.log('GSAP and ScrollTrigger loaded successfully');
        gsap.registerPlugin(ScrollTrigger);
      } else {
        console.warn('GSAP or ScrollTrigger not found');
      }
    } catch (error) {
      console.error('Error initializing GSAP:', error);
    }
  }
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/thank-you" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize GSAP globally when app loads
    initializeGSAP();
    
    // Clean up any GSAP instances or scroll triggers on unmount
    return () => {
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
