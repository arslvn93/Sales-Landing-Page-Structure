// GSAP TypeScript declarations
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: {
      create: (params: any) => any;
      getAll: () => any[];
      refresh: () => void;
      registerPlugin: (plugin: any) => void;
    };
  }
}

// Utility functions for GSAP animations

// Function to create a text reveal animation for both class selectors and direct DOM elements
export const textReveal = (selector: string | HTMLElement, delay = 0) => {
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
export const floatElement = (selector: string | HTMLElement) => {
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
  if (typeof window === "undefined" || !window.gsap || !window.ScrollTrigger) return;
  
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.warn(`No elements found with selector: ${selector}`);
    return;
  }
  
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
};

// Function to animate counting up for statistics
export const animateCounter = (selector: string) => {
  if (typeof window === "undefined" || !window.gsap || !window.ScrollTrigger) return;
  
  const counters = document.querySelectorAll(selector);
  if (counters.length === 0) {
    console.warn(`No counter elements found with selector: ${selector}`);
    return;
  }
  
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
};

// Function to create a pulse animation for buttons
export const pulseButton = (selector: string) => {
  if (typeof window !== "undefined" && window.gsap) {
    const buttons = document.querySelectorAll(selector);
    if (buttons.length === 0) {
      console.warn(`No button elements found with selector: ${selector}`);
      return;
    }
    
    window.gsap.to(selector, {
      scale: 1.05,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
};

// Function to update the countdown timer
export const initCountdown = (targetDate: string, daysId: string, hoursId: string, minutesId: string, secondsId: string) => {
  if (typeof window === "undefined") return;
  
  const countdownDate = new Date(targetDate).getTime();
  
  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const daysElement = document.getElementById(daysId);
    const hoursElement = document.getElementById(hoursId);
    const minutesElement = document.getElementById(minutesId);
    const secondsElement = document.getElementById(secondsId);
    
    if (daysElement) {
      daysElement.innerHTML = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
    }
    
    if (hoursElement) {
      hoursElement.innerHTML = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
    }
    
    if (minutesElement) {
      minutesElement.innerHTML = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
    }
    
    if (secondsElement) {
      secondsElement.innerHTML = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)).toString().padStart(2, '0');
    }
    
    return distance > 0;
  };
  
  // Initial update
  updateTimer();
  
  // Update every second
  const interval = setInterval(() => {
    const stillRunning = updateTimer();
    if (!stillRunning) {
      clearInterval(interval);
    }
  }, 1000);
  
  return interval;
};
