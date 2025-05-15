import { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // These classes will be targeted by the GSAP animations initialized in animation.ts
    if (titleRef.current) titleRef.current.classList.add("text-reveal");
    if (subtitleRef.current) subtitleRef.current.classList.add("text-reveal-delay");
    if (ctaRef.current) ctaRef.current.classList.add("text-reveal-delay-2");
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
    <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Generate Consistent <span className="text-accent">Leads</span> in 6 Months or Less
            </h1>
            <p 
              ref={subtitleRef} 
              className="text-xl mb-8 text-gray-100"
            >
              The proven system that has helped over 10,000 businesses build a reliable lead generation machine that delivers qualified prospects month after month.
            </p>
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection("cta")} 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-center transition shadow-lg pulse-btn"
              >
                Secure Your Spot
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="bg-white hover:bg-gray-100 text-secondary font-bold py-4 px-8 rounded-lg text-center transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Business professional working on lead generation strategy" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-secondary p-4 rounded-lg shadow-lg">
              <p className="font-bold">Next Cohort: <span id="remaining-spots">7</span> Spots Left</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
