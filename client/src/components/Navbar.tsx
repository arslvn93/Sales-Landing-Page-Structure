import { useState, useEffect } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-[#1c1c1c] py-4 px-6 shadow-sm sticky top-0 z-50 transition-all ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold">
          <img src="/images/logo-white.png" alt="SalesGenius" className="h-8" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="text-white hover:text-[#1c65b8] font-medium transition"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className="text-white hover:text-[#1c65b8] font-medium transition"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="text-white hover:text-[#1c65b8] font-medium transition"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-white hover:text-[#1c65b8] font-medium transition"
          >
            Testimonials
          </button>
        </div>
        <button 
          onClick={() => scrollToSection("cta")} 
          className="hidden md:block bg-white hover:bg-[#1c65b8] text-[#193d65] hover:text-white font-bold py-3 px-6 rounded transition shadow-md"
        >
          Get 6-Month Lead Machine
        </button>
        <button 
          className="md:hidden text-white" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-white absolute left-0 right-0 p-6 shadow-lg`}>
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="text-[#333333] hover:text-[#1c65b8] font-medium transition py-2 text-left"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className="text-[#333333] hover:text-[#1c65b8] font-medium transition py-2 text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className="text-[#333333] hover:text-[#1c65b8] font-medium transition py-2 text-left"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-[#333333] hover:text-[#1c65b8] font-medium transition py-2 text-left"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="bg-[#193d65] hover:bg-[#1c65b8] text-white font-bold py-3 px-6 rounded text-center transition shadow-md"
          >
            Get 6-Month Lead Machine
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
