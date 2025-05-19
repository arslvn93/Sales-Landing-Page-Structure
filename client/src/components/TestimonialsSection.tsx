import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tim Connolly",
      role: "Real Estate Agent",
      image: "/images/Tim.png",
      content: "Working with Ryan, Emma and Rebecca at SalesGenius has completely changed my business. I signed up for the program at a time in my career when I was really struggling, and genuinely unsure whether or not I was going to make it in real estate. I consider the money I spent on this coaching to be one of the best investments I have ever made."
    },
    {
      name: "James Anderson",
      role: "Real Estate Professional",
      image: "/images/James Anderson.jpg",
      content: "No BS, No Pressure. It taught me how to decipher if a lead has real intentions and potential and was worth my time to move forward with them. You can tell throughout the course that these 2 both have trained hundreds of agents and learned from the best!"
    },
    {
      name: "Shar Banifatemi",
      role: "Real Estate Team Leader",
      image: "/images/Shar.png",
      content: "I joined the basic program to start and eventually switched over to their top plan with our team. This program will improve everything about your business and they literally open all of their systems for you to see. This is the first program I've done where I actually implement most things we learn immediately, mainly because Ryan and Emma give practical actionable items to use right away in our day to day business."
    }
  ];

  const stats = [
    { value: 1823, label: "Leads in last 30 days" },
    { value: 6, suffix: ".20", prefix: "$", label: "Cost Per Lead" },
    { value: 764992, label: "Ad Views" },
    { value: 0, label: "Customer Cancellations" }
  ];
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to animate counting up to a target number
  const animateCounter = (element: HTMLElement, target: number) => {
    let start = 0;
    const duration = 2000; // ms
    const increment = Math.ceil(target / (duration / 16)); // 16ms is roughly one frame at 60fps
    
    const updateCounter = () => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toString();
      } else {
        element.textContent = start.toString();
        requestAnimationFrame(updateCounter);
      }
    };
    
    updateCounter();
  };

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
    
    testimonialRefs.current.forEach(card => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
      }
    });
    
    statRefs.current.forEach(stat => {
      if (stat) {
        stat.style.opacity = "0";
        stat.style.transform = "translateY(30px)";
      }
    });
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Testimonials section in view, animating...");
        
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
        
        // Animate testimonials one by one
        testimonialRefs.current.forEach((card, index) => {
          setTimeout(() => {
            if (card) {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
              card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            }
          }, 400 + (index * 200));
        });
        
        // Animate stats one by one with counter animation
        statRefs.current.forEach((stat, index) => {
          setTimeout(() => {
            if (stat) {
              stat.style.opacity = "1";
              stat.style.transform = "translateY(0)";
              stat.style.transition = "opacity 0.6s ease, transform 0.6s ease";
              
              // Animate counter
              const counterElement = stat.querySelector('.counter');
              if (counterElement) {
                const targetValue = parseInt(counterElement.getAttribute('data-count') || '0', 10);
                animateCounter(counterElement as HTMLElement, targetValue);
              }
            }
          }, 1200 + (index * 150));
        });
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.getElementById("testimonials");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="testimonials" className="bg-[#1c1c1c] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Success <span className="text-[#1c65b8] font-bold">Stories</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-white"
          >
            Join the thousands of real estate agents who have transformed their lead generation with our program.
          </p>

        </div>
        
        {/* Top 3 Most Powerful Stats Above Testimonials */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-4xl text-accent mb-2">🎯</div>
              <div className="text-3xl font-bold text-white mb-1">33.7</div>
              <p className="text-sm font-medium mb-1 text-white">LEADS PER MONTH</p>
              <p className="text-xs text-white">for the typical agent</p>
            </div>
            
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-4xl text-accent mb-2">💰</div>
              <div className="text-3xl font-bold text-white mb-1">$6.20</div>
              <p className="text-sm font-medium mb-1 text-white">COST PER LEAD</p>
              <p className="text-xs text-white">in efficient campaigns</p>
            </div>
            
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-4xl text-accent mb-2">📈</div>
              <div className="text-3xl font-bold text-white mb-1">3.7%</div>
              <p className="text-sm font-medium mb-1 text-white">CLICK RATE</p>
              <p className="text-xs text-white">4.1x industry average</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial Cards */}
        <div className="flex flex-wrap -mx-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:w-1/3 px-4 mb-8">
              <div 
                ref={el => testimonialRefs.current[index] = el}
                className="bg-white text-secondary p-8 rounded-lg shadow-xl h-full hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="text-accent">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Last 30 Day Stats Header - After Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-3 mb-6 inline-block">
            Last 30 Day Stats (April-May 2025)
          </h3>
        </div>
        
        {/* Stats Display - After Testimonials */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                ref={el => statRefs.current[index] = el}
                className="py-4"
              >
                <div className="text-4xl font-bold text-accent">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <span className="counter" data-count={stat.value}>0</span>
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
