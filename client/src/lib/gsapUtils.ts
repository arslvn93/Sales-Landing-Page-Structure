// Utility functions for GSAP animations

// Function to create a text reveal animation
export const textReveal = (selector: string, delay = 0) => {
  if (typeof window !== "undefined" && window.gsap) {
    window.gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay
    });
  }
};

// Function to create a floating animation for elements
export const floatElement = (selector: string) => {
  if (typeof window !== "undefined" && window.gsap) {
    window.gsap.to(selector, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
};

// Function to create scroll trigger animations
export const createScrollTrigger = (selector: string, animate = true, fromDirection = 'bottom') => {
  if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      let animationParams = {};
      
      if (animate) {
        switch (fromDirection) {
          case 'left':
            animationParams = { opacity: 0, x: -50 };
            break;
          case 'right':
            animationParams = { opacity: 0, x: 50 };
            break;
          case 'top':
            animationParams = { opacity: 0, y: -50 };
            break;
          default: // bottom
            animationParams = { opacity: 0, y: 50 };
        }
      }
      
      window.gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        },
        ...animationParams,
        duration: 0.8
      });
    });
  }
};

// Function to animate counting up for statistics
export const animateCounter = (selector: string) => {
  if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
    const counters = document.querySelectorAll(selector);
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      
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
  }
};

// Function to create a pulse animation for buttons
export const pulseButton = (selector: string) => {
  if (typeof window !== "undefined" && window.gsap) {
    window.gsap.to(selector, {
      scale: 1.05,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
};
