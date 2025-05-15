import { 
  textReveal, 
  floatElement, 
  createScrollTrigger, 
  animateCounter, 
  pulseButton 
} from "@/lib/gsapUtils";

// This function will be called when the page loads to initialize all animations
export const initializeAnimations = () => {
  // Text reveal animations in hero section
  textReveal('.text-reveal', 0);
  textReveal('.text-reveal-delay', 0.3);
  textReveal('.text-reveal-delay-2', 0.6);
  
  // Floating element animation
  floatElement('.floating-element');
  
  // Process steps animation with scroll trigger
  createScrollTrigger('.process-step', true, 'bottom');
  
  // Counter animations
  animateCounter('.counter');
  
  // Pulse button animation
  pulseButton('.pulse-btn');
};

// Document ready handler (for use when attaching directly to HTML)
document.addEventListener('DOMContentLoaded', function() {
  // Text reveal animations
  if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    
    // Hero animations
    window.gsap.from('.text-reveal', {
      opacity: 0,
      y: 50,
      duration: 1
    });
    
    window.gsap.from('.text-reveal-delay', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3
    });
    
    window.gsap.from('.text-reveal-delay-2', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6
    });
    
    // Floating element animation
    window.gsap.to('.floating-element', {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    // Process steps animation
    window.gsap.utils.toArray('.process-step').forEach((step: any) => {
      window.gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      });
    });
    
    // Counter animations
    window.gsap.utils.toArray('.counter').forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-count'));
      window.ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
          const obj = { val: 0 };
          window.gsap.to(obj, {
            val: target,
            duration: 2,
            onUpdate: function() {
              counter.innerHTML = Math.floor(obj.val).toLocaleString();
            }
          });
        }
      });
    });
    
    // Pulse button animation
    window.gsap.to('.pulse-btn', {
      scale: 1.05,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
});
