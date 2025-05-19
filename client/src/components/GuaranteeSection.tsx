import { useEffect, useRef } from "react";

const GuaranteeSection = () => {
  const guarantees = [
    "We guarantee actual leads in your CRM within 7 days or you get a complete refund",
    "Not vague promises. Not \"coming soon\" excuses. ACTUAL LEADS in your system within your first week",
    "If we don't deliver, you get every penny back - no questions asked"
  ];

  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const guaranteeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial setup - hide elements
    if (iconRef.current) {
      iconRef.current.style.opacity = "0";
      iconRef.current.style.transform = "scale(0.8)";
    }
    
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
      descriptionRef.current.style.transform = "translateY(30px)";
    }
    
    guaranteeRefs.current.forEach(item => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
      }
    });
    
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(30px)";
    }
    
    if (testimonialRef.current) {
      testimonialRef.current.style.opacity = "0";
      testimonialRef.current.style.transform = "translateX(30px)";
    }
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Guarantee section in view, animating...");
        
        // Animate icon with a scale effect
        if (iconRef.current) {
          iconRef.current.style.opacity = "1";
          iconRef.current.style.transform = "scale(1)";
          iconRef.current.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
        
        // Animate title
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.style.opacity = "1";
            titleRef.current.style.transform = "translateY(0)";
            titleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 300);
        
        // Animate description
        setTimeout(() => {
          if (descriptionRef.current) {
            descriptionRef.current.style.opacity = "1";
            descriptionRef.current.style.transform = "translateY(0)";
            descriptionRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 500);
        
        // Animate guarantee list items sequentially
        guaranteeRefs.current.forEach((item, index) => {
          setTimeout(() => {
            if (item) {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
              item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }
          }, 700 + (index * 150));
        });
        
        // Animate CTA
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 1200);
        
        // Animate testimonial card with a slide-in effect
        setTimeout(() => {
          if (testimonialRef.current) {
            testimonialRef.current.style.opacity = "1";
            testimonialRef.current.style.transform = "translateX(0)";
            testimonialRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          }
        }, 600);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.querySelector(".guarantee-section");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
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
    <section className="guarantee-section bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div 
              ref={iconRef}
              className="text-9xl text-primary mb-4"
            >
              <i className="fas fa-certificate"></i>
            </div>
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 text-secondary"
            >
              OUR <span className="text-primary">"LEADS IN 7 DAYS"</span> GUARANTEE
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg mb-6 text-gray-600"
            >
              We're so confident in our system that we offer a guarantee no other marketing company would dare make.
            </p>
            <ul className="space-y-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <li 
                  key={index} 
                  ref={el => guaranteeRefs.current[index] = el}
                  className="flex items-start"
                >
                  <div className="text-primary mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <p>{guarantee}</p>
                </li>
              ))}
            </ul>
            <div ref={ctaRef}>
              <button 
                onClick={() => scrollToSection("cta")} 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
              >
                Start Risk-Free Today
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div 
              ref={testimonialRef}
              className="bg-white p-0 rounded-xl shadow-xl overflow-hidden"
            >
              <h3 className="text-3xl font-bold text-[#4171C9] text-center py-6">What Our Clients Say</h3>
              <img 
                src="/images/classroom-photo.jpeg" 
                alt="Real estate professionals in a classroom setting" 
                className="w-full h-auto"
              />
              <div className="p-8">
                <p className="text-gray-700 text-lg italic mb-6">
                  "This was just the product I was looking for... No BS, No Pressure. It taught me how to decipher if a lead has real intentions and potential and was worth my time to move forward with them. You can tell throughout the course that these 2 both have trained hundreds of agents and learned from the best!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="/images/James Anderson.jpg" 
                    alt="James Anderson" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl">James Anderson</h4>
                    <p className="text-sm text-gray-600">Real Estate Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
