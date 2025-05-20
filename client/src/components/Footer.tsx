const Footer = () => {
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
    <footer className="bg-[#1c1c1c] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              <img src="/images/logo-white.png" alt="SalesGenius" className="h-12" />
            </h3>
            <p className="max-w-xs text-white">
              Transforming businesses with proven lead generation systems, expert guidance, and supportive community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Program</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <button 
                    onClick={() => scrollToSection("how-it-works")} 
                    className="text-white hover:text-[#1c65b8] transition"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("features")} 
                    className="text-white hover:text-[#1c65b8] transition"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("pricing")} 
                    className="text-white hover:text-[#1c65b8] transition"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("testimonials")} 
                    className="text-white hover:text-[#1c65b8] transition"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white">
                <li><a href="https://salesgenius.co/#section-000GKsHQCz" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">About Us</a></li>
                <li><a href="https://salesgenius.co/#section-cgPH8BM2q" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href="https://salesgenius.co/privacypolicy-3365" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://salesgenius.co/termsofservice" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            &copy; 2025 SalesGenius. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/SalesGenius/100094384758378/" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/salesgeniusofficial/" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@SalesGeniusOfficial" className="text-white hover:text-[#1c65b8] transition" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
