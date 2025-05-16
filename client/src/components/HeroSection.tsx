import { useEffect, useRef } from "react";

const HeroSection = () => {
  // Use direct style application instead of relying on class-based GSAP animations initially
  const animateIn = () => {
    console.log("Manually animating hero section");
    
    // Apply animations directly with inline styles for testing
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
      titleRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }
    
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current!.style.opacity = "1";
        subtitleRef.current!.style.transform = "translateY(0)";
        subtitleRef.current!.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      }, 300);
    }
    
    if (ctaRef.current) {
      setTimeout(() => {
        ctaRef.current!.style.opacity = "1";
        ctaRef.current!.style.transform = "translateY(0)";
        ctaRef.current!.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      }, 600);
    }
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Initial setup
    if (titleRef.current) titleRef.current.style.opacity = "0";
    if (titleRef.current) titleRef.current.style.transform = "translateY(50px)";
    
    if (subtitleRef.current) subtitleRef.current.style.opacity = "0";
    if (subtitleRef.current) subtitleRef.current.style.transform = "translateY(50px)";
    
    if (ctaRef.current) ctaRef.current.style.opacity = "0";
    if (ctaRef.current) ctaRef.current.style.transform = "translateY(50px)";
    
    // Trigger animations
    setTimeout(animateIn, 100);
    
    // These classes will be targeted by the GSAP animations initialized in animation.ts
    if (imageRef.current) imageRef.current.classList.add("floating-element");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Get <span className="text-accent">Qualified Real Estate Leads</span> in Just 7 Days
            </h1>
            <p 
              ref={subtitleRef} 
              className="text-xl mb-8 text-gray-100"
            >
              The Spring Special Fast-Track System for ambitious agents who want consistent buyer and seller leads without the hassle of managing their own marketing campaigns.
            </p>
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection("cta")} 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-center transition shadow-lg"
              >
                SECURE YOUR SPOT - ONLY 6 AVAILABLE
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="bg-white hover:bg-gray-100 text-secondary font-bold py-4 px-8 rounded-lg text-center transition"
              >
                See How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Successful real estate agent with satisfied clients" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-secondary p-4 rounded-lg shadow-lg">
              <p className="font-bold">SPRING SPECIAL: <span id="remaining-spots">6</span> Spots Left</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
