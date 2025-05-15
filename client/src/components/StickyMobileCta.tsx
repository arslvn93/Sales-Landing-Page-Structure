import { useEffect, useState } from "react";

const StickyMobileCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showStickyButton = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", showStickyButton);
    return () => window.removeEventListener("scroll", showStickyButton);
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
    <div className={`sticky-cta md:hidden ${isVisible ? "visible" : ""}`}>
      <div className="bg-primary text-white p-4 shadow-lg">
        <button 
          onClick={() => scrollToSection("cta")} 
          className="block text-center font-bold w-full"
        >
          Secure Your Spot Now <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCta;
