import { 
  textReveal, 
  floatElement, 
  createScrollTrigger, 
  animateCounter, 
  pulseButton,
  initCountdown 
} from "@/lib/gsapUtils";

// This function will be called when the component mounts to initialize all animations
export const initializeAnimations = () => {
  // Make sure GSAP is available
  if (typeof window !== "undefined" && window.gsap) {
    // Register ScrollTrigger plugin
    if (window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
    
    console.log('Initializing GSAP animations');
    
    // Text reveal animations in hero section
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach(el => {
      textReveal(el as HTMLElement, 0);
    });
    
    const textDelayElements = document.querySelectorAll('.text-reveal-delay');
    textDelayElements.forEach(el => {
      textReveal(el as HTMLElement, 0.3);
    });
    
    const textDelay2Elements = document.querySelectorAll('.text-reveal-delay-2');
    textDelay2Elements.forEach(el => {
      textReveal(el as HTMLElement, 0.6);
    });
    
    // Floating element animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => {
      floatElement(el as HTMLElement);
    });
    
    // Scroll trigger animations
    createScrollTrigger('.process-step', true, 'bottom');
    
    // Counter animations
    animateCounter('.counter');
    
    // Pulse button animation
    pulseButton('.pulse-btn');
    
    // Initialize countdown timer
    initCountdown(
      "June 1, 2025 23:59:59", 
      "days",
      "hours",
      "minutes",
      "seconds"
    );
    
    // Initialize sticky button for mobile
    const showStickyButton = () => {
      const stickyCta = document.querySelector('.sticky-cta');
      if (stickyCta) {
        if (window.scrollY > 300) {
          stickyCta.classList.add('visible');
        } else {
          stickyCta.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener("scroll", showStickyButton);
    
    // Set initial opacity for animated elements
    document.querySelectorAll('.text-reveal, .text-reveal-delay, .text-reveal-delay-2').forEach(el => {
      (el as HTMLElement).style.opacity = '1';
    });
  } else {
    console.warn('GSAP not found. Animations will not work.');
  }
};
