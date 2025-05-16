import { useEffect, useRef } from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "We Build Your Lead Generation Machine",
      description: "Our team creates your entire campaign from scratch - writing compelling ad copy, building campaigns, and setting up all targeting for your specific market."
    },
    {
      number: 2,
      title: "We Launch Your Campaigns & Deliver Leads",
      description: "Within 7 days, qualified buyer leads start flowing directly into your CRM - complete with contact information and buyer preferences."
    },
    {
      number: 3,
      title: "We Implement Your Follow-Up System",
      description: "Every lead automatically receives proven follow-up sequences that nurture them until they're ready to work with you - without you lifting a finger."
    },
    {
      number: 4,
      title: "We Coach You On Conversion",
      description: "Weekly coaching calls ensure you know exactly how to convert these leads into appointments and clients using our proven scripts and frameworks."
    },
    {
      number: 5,
      title: "We Optimize & Scale",
      description: "Our team continuously monitors performance and makes adjustments to improve results while you focus on closing deals."
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial setup - hide elements
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
      descriptionRef.current.style.transform = "translateY(30px)";
    }
    
    if (timelineRef.current) {
      timelineRef.current.style.opacity = "0";
      timelineRef.current.style.height = "0";
    }
    
    stepRefs.current.forEach(step => {
      if (step) {
        step.style.opacity = "0";
        step.style.transform = "translateY(40px)";
      }
    });
    
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("How it works section in view, animating...");
        
        // Animate title
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
          titleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
        
        // Animate description
        setTimeout(() => {
          if (descriptionRef.current) {
            descriptionRef.current.style.opacity = "1";
            descriptionRef.current.style.transform = "translateY(0)";
            descriptionRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 200);
        
        // Animate timeline
        setTimeout(() => {
          if (timelineRef.current) {
            timelineRef.current.style.opacity = "1";
            timelineRef.current.style.height = "100%";
            timelineRef.current.style.transition = "opacity 0.8s ease, height 1.5s ease";
          }
        }, 400);
        
        // Animate steps one by one with staggered delay
        stepRefs.current.forEach((step, index) => {
          setTimeout(() => {
            if (step) {
              step.style.opacity = "1";
              step.style.transform = "translateY(0)";
              step.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            }
          }, 600 + (index * 300));
        });
        
        // Animate CTA last
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 1800);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.getElementById("how-it-works");
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
    <section id="how-it-works" className="bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
          >
            HERE'S EXACTLY HOW THE <span className="text-primary">6-MONTH AMBITIOUS AGENT LEAD MACHINE</span> WORKS
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            A Complete Done-For-You System That Delivers Qualified Leads While You Focus On Closing Deals
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={timelineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2"
          ></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                ref={el => stepRefs.current[index] = el}
                className="flex flex-col md:flex-row items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-2 md:order-1">
                      <h3 className="text-2xl font-bold mb-3 text-secondary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative mb-8 md:mb-0">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10">
                        {step.number}
                      </div>
                      <div className="hidden md:block absolute left-0 right-0 h-1 bg-primary top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 flex justify-center order-1 relative mb-8 md:mb-0">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10">
                        {step.number}
                      </div>
                      <div className="hidden md:block absolute left-0 right-0 h-1 bg-primary top-1/2 transform -translate-y-1/2"></div>
                    </div>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12 order-2">
                      <h3 className="text-2xl font-bold mb-3 text-secondary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div ref={ctaRef} className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
          >
            Start Your Lead Generation Journey <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
