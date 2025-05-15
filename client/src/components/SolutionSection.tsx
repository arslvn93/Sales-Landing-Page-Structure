import { useEffect, useRef } from "react";

const SolutionSection = () => {
  const solutions = [
    {
      title: "Proven Lead Generation Framework",
      description: "Follow our battle-tested 7-step framework that eliminates guesswork and builds a predictable lead generation system."
    },
    {
      title: "Expert-Led Implementation",
      description: "Get personal guidance from marketing specialists who have built lead machines for businesses of all sizes."
    },
    {
      title: "Comprehensive Toolkit",
      description: "Access proven templates, scripts, and strategies that make implementation fast and effective across any industry."
    }
  ];

  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial setup - hide elements
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      imageRef.current.style.transform = "translateX(-30px)";
    }
    
    if (badgeRef.current) {
      badgeRef.current.style.opacity = "0";
      badgeRef.current.style.transform = "translateY(-20px)";
    }
    
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
      descriptionRef.current.style.transform = "translateY(30px)";
    }
    
    solutionRefs.current.forEach(solution => {
      if (solution) {
        solution.style.opacity = "0";
        solution.style.transform = "translateY(30px)";
      }
    });
    
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Solution section in view, animating...");
        
        // Animate image
        if (imageRef.current) {
          imageRef.current.style.opacity = "1";
          imageRef.current.style.transform = "translateX(0)";
          imageRef.current.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        }
        
        // Animate badge with a slight delay
        setTimeout(() => {
          if (badgeRef.current) {
            badgeRef.current.style.opacity = "1";
            badgeRef.current.style.transform = "translateY(0)";
            badgeRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 300);
        
        // Animate title
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.style.opacity = "1";
            titleRef.current.style.transform = "translateY(0)";
            titleRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 400);
        
        // Animate description
        setTimeout(() => {
          if (descriptionRef.current) {
            descriptionRef.current.style.opacity = "1";
            descriptionRef.current.style.transform = "translateY(0)";
            descriptionRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 600);
        
        // Animate solutions one by one
        solutionRefs.current.forEach((solution, index) => {
          setTimeout(() => {
            if (solution) {
              solution.style.opacity = "1";
              solution.style.transform = "translateY(0)";
              solution.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }
          }, 700 + (index * 200));
        });
        
        // Animate CTA last
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 1200);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.getElementById("solution");
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
    <section id="solution" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Marketing specialists working on lead generation strategies" 
              className="rounded-lg shadow-xl"
            />
            <div 
              ref={badgeRef}
              className="absolute -top-6 -right-6 bg-accent text-secondary p-4 rounded-lg shadow-lg hidden md:block"
            >
              <p className="font-bold text-lg">94% Success Rate</p>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 text-secondary"
            >
              Introducing the <span className="text-primary">6-Month Lead Machine</span>
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg mb-6 text-gray-700"
            >
              A comprehensive system that transforms your business into a lead generation powerhouse with predictable, consistent results.
            </p>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  ref={el => solutionRefs.current[index] = el}
                  className="flex items-start"
                >
                  <div className="bg-accent rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-secondary">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div ref={ctaRef} className="mt-8">
              <button 
                onClick={() => scrollToSection("cta")} 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
              >
                I Want This <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
