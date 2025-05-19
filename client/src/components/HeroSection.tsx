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
    <section id="hero" className="bg-gradient-to-br from-[#1c1c1c] to-[#333333] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-white font-bold mb-2 bg-[#1c65b8] inline-block px-3 py-1 rounded-sm text-sm">FOR SERIOUS AGENTS ONLY:</p>
            <h1 
              ref={titleRef} 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white tracking-tight"
            >
              Test-Drive Our <span className="text-[#1c65b8] font-extrabold">Done-For-You Buyer Lead System</span> For 6 Months With <span className="italic">Zero Long-Term Commitment</span>... <br className="hidden md:block"/>And See Your First Leads In <span className="bg-[#1c65b8] px-2 py-1 rounded text-white font-extrabold">7 Days Or We Pay You Back</span>
            </h1>
            <p 
              ref={subtitleRef} 
              className="text-lg mb-8 text-white leading-relaxed"
            >
              Need more buyer leads but <span className="italic">hesitant to commit</span> to a long-term coaching program? <span className="bg-white/10 px-1 py-0.5 rounded">For the first time ever</span>, we're offering our <span className="font-semibold">proven lead system</span> as a 6-month trial. <span className="underline">Works with your current CRM</span> and <span className="font-bold">guarantees buyer leads in 7 days</span> - no 12-month contract required.
            </p>
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection("cta")} 
                className="bg-white hover:bg-[#1c65b8] text-[#193d65] hover:text-white font-bold py-4 px-8 rounded text-center transition shadow-md"
              >
                SECURE YOUR SPOT - ONLY 6 AVAILABLE
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="border-2 border-white hover:bg-white text-white hover:text-[#193d65] font-bold py-4 px-8 rounded text-center transition"
              >
                See How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              ref={imageRef}
              src="/images/tmpeg4vf10p.webp" 
              alt="SalesGenius coaching group call with real estate agents" 
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
