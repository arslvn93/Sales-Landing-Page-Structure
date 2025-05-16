import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-video",
      title: "12 Video Modules",
      description: "Step-by-step training covering every aspect of building your lead generation system, from strategy to implementation.",
      value: "$2,997"
    },
    {
      icon: "fas fa-users",
      title: "Bi-Weekly Group Coaching",
      description: "Live Q&A sessions with lead generation experts who provide personalized guidance and feedback on your campaigns.",
      value: "$4,500"
    },
    {
      icon: "fas fa-file-alt",
      title: "Lead Generation Toolkit",
      description: "Templates, scripts, and swipe files for every stage of your lead generation process, saving you hundreds of hours.",
      value: "$1,997"
    },
    {
      icon: "fas fa-comments",
      title: "Private Community",
      description: "Connect with fellow business owners, share insights, find partners, and get accountability for your lead generation efforts.",
      value: "$997"
    },
    {
      icon: "fas fa-headset",
      title: "1-on-1 Strategy Call",
      description: "A private 60-minute session with a lead generation specialist to create your personalized lead generation roadmap.",
      value: "$500"
    },
    {
      icon: "fas fa-tools",
      title: "Tech & Tools Guide",
      description: "Recommendations for the essential software and tools you need for effective lead generation, with exclusive discounts.",
      value: "$497"
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pricingBoxRef = useRef<HTMLDivElement>(null);

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
    
    featureRefs.current.forEach(feature => {
      if (feature) {
        feature.style.opacity = "0";
        feature.style.transform = "translateY(40px)";
      }
    });
    
    if (pricingBoxRef.current) {
      pricingBoxRef.current.style.opacity = "0";
      pricingBoxRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Features section in view, animating...");
        
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
        
        // Animate features with staggered timing and row-based pattern
        // This creates a wave-like animation pattern across the grid
        featureRefs.current.forEach((feature, index) => {
          // Calculate delay based on grid position (assuming 3 columns on large screens)
          // This creates a more natural flow for the animation
          const row = Math.floor(index / 3);
          const col = index % 3;
          const delay = 400 + (row * 150) + (col * 100);
          
          setTimeout(() => {
            if (feature) {
              feature.style.opacity = "1";
              feature.style.transform = "translateY(0)";
              feature.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            }
          }, delay);
        });
        
        // Animate pricing box last
        setTimeout(() => {
          if (pricingBoxRef.current) {
            pricingBoxRef.current.style.opacity = "1";
            pricingBoxRef.current.style.transform = "translateY(0)";
            pricingBoxRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        }, 1400);
        
        // Add a pulse effect to the button after everything has animated
        setTimeout(() => {
          const button = pricingBoxRef.current?.querySelector('button');
          if (button) {
            button.classList.add('animate-pulse');
            // Remove and re-add the class to restart the animation every few seconds
            setInterval(() => {
              button.classList.remove('animate-pulse');
              setTimeout(() => {
                button.classList.add('animate-pulse');
              }, 100);
            }, 3000);
          }
        }, 2000);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.getElementById("features");
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
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
          >
            What You'll <span className="text-primary">Get</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            Everything you need to transform your business into a lead generation powerhouse in 6 months or less.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={el => featureRefs.current[index] = el}
              className="bg-neutral p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary text-3xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-accent font-bold">Value: {feature.value}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={pricingBoxRef}
          className="mt-12 bg-primary rounded-xl p-8 text-white text-center max-w-3xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Total Value: <span className="text-accent">$11,488</span></h3>
          <p className="text-xl mb-6">Today's Price: <span className="text-accent font-bold">Just $1,997</span></p>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition shadow-md"
          >
            Secure Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
