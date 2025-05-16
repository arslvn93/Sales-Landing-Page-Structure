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
    <nav className={`bg-white py-4 px-6 shadow-sm sticky top-0 z-50 transition-all ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold">
          <img src="/src/assets/logo-black.png" alt="SalesGenius" className="h-8" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="text-secondary hover:text-primary font-medium transition"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className="text-secondary hover:text-primary font-medium transition"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className="text-secondary hover:text-primary font-medium transition"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-secondary hover:text-primary font-medium transition"
          >
            Testimonials
          </button>
        </div>
        <button 
          onClick={() => scrollToSection("cta")} 
          className="hidden md:block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition shadow-md"
        >
          Get 6-Month Lead Machine
        </button>
        <button 
          className="md:hidden text-secondary" 
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
            className="text-secondary hover:text-primary font-medium transition py-2 text-left"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className="text-secondary hover:text-primary font-medium transition py-2 text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className="text-secondary hover:text-primary font-medium transition py-2 text-left"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-secondary hover:text-primary font-medium transition py-2 text-left"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg text-center transition shadow-md"
          >
            Get 6-Month Lead Machine
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
