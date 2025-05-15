import { useEffect, useRef } from "react";

const ProblemSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const problemCards = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initial setup
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(30px)";
    }
    
    problemCards.current.forEach(card => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
      }
    });
    
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer to trigger animations when section comes into view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Problem section in view, animating...");
        
        // Animate title
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
          titleRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        }
        
        // Animate subtitle after a short delay
        setTimeout(() => {
          if (subtitleRef.current) {
            subtitleRef.current.style.opacity = "1";
            subtitleRef.current.style.transform = "translateY(0)";
            subtitleRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 200);
        
        // Animate problem cards with increasing delay
        problemCards.current.forEach((card, index) => {
          setTimeout(() => {
            if (card) {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
              card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }
          }, 400 + (index * 150));
        });
        
        // Animate CTA last
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          }
        }, 900);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    // Start observing the section
    const section = document.getElementById("problem");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "fas fa-brain",
      title: "Information Overload",
      description: "Too much conflicting advice leaves businesses paralyzed and unable to take decisive action on lead generation."
    },
    {
      icon: "fas fa-chart-line",
      title: "No Proven System",
      description: "Without a clear roadmap to follow, they waste time and money on lead generation strategies that don't work."
    },
    {
      icon: "fas fa-users",
      title: "Lack of Expertise",
      description: "Going it alone means making avoidable mistakes that can cost thousands and delay success by years."
    }
  ];
  
  return (
    <section id="problem" className="bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
          >
            Why Most Businesses <span className="text-primary">Struggle</span> with Lead Generation
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            Despite investing in marketing, 68% of businesses struggle with generating a consistent flow of qualified leads. Here's why:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              ref={el => problemCards.current[index] = el}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-primary text-3xl mb-4">
                <i className={problem.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div ref={ctaRef} className="mt-16 text-center">
          <p className="text-lg font-bold text-secondary mb-6">Do any of these challenges sound familiar?</p>
          <button 
            onClick={() => {
              const element = document.getElementById("solution");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Discover the Solution <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
