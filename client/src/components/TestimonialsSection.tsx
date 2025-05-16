import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Agency",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "Before this program, I was spending thousands on ads with inconsistent results. Within 3 months of implementing the Lead Machine system, our lead generation costs dropped by 60% while our qualified leads tripled. Our agency now has a waiting list of clients!"
    },
    {
      name: "Michael Rodriguez",
      role: "SaaS Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "The program gave me the exact blueprint I needed to generate consistent leads for our SaaS product. The coaching was instrumental—I avoided mistakes that would have cost me thousands of dollars and months of wasted effort. We've grown our user base by 215% in just 6 months."
    },
    {
      name: "Jennifer Lewis",
      role: "Real Estate Broker",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "I was stuck in a cycle of feast or famine with my real estate business. This program helped me transform it into a predictable operation with consistent leads and closings. My income has tripled in just 6 months, and I've been able to hire two assistants to handle the growth."
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
            className="text-3xl md:text-4xl font-bold mb-4"
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
              <p className="text-sm font-medium mb-1">LEADS PER MONTH</p>
              <p className="text-xs text-gray-300">for the typical agent</p>
            </div>
            
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-4xl text-accent mb-2">💰</div>
              <div className="text-3xl font-bold text-white mb-1">$6.20</div>
              <p className="text-sm font-medium mb-1">COST PER LEAD</p>
              <p className="text-xs text-gray-300">in efficient campaigns</p>
            </div>
            
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-4xl text-accent mb-2">📈</div>
              <div className="text-3xl font-bold text-white mb-1">3.7%</div>
              <p className="text-sm font-medium mb-1">CLICK RATE</p>
              <p className="text-xs text-gray-300">4.1x industry average</p>
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
