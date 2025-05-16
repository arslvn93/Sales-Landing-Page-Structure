import { useEffect, useRef } from "react";

const GuaranteeSection = () => {
  const guarantees = [
    "Participate in at least 4 coaching calls",
    "Complete the first 4 program modules",
    "Show that you've implemented the core strategies"
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
              Our 30-Day Money-Back <span className="text-primary">Guarantee</span>
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg mb-6 text-gray-600"
            >
              We're confident our program will deliver exceptional value. If you implement our strategies and don't see results, we'll refund 100% of your investment.
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
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-secondary">What Our Clients Say</h3>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Business owner working on lead generation" 
                className="rounded-lg mb-6 w-full"
              />
              <div className="text-gray-700 italic mb-4">
                "I was skeptical at first and almost asked for a refund in week 2. But the coaches encouraged me to stick with it, and by month 3 I had already secured consistent lead flow generating 15 qualified prospects weekly. This program is worth every penny and more."
              </div>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" 
                  alt="David Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-bold">David Chen</h5>
                  <p className="text-sm text-gray-600">B2B Services Provider</p>
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
