import { useEffect, useRef } from "react";

const WhyOfferingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const guaranteeBoxRef = useRef<HTMLDivElement>(null);
  const statsBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial setup - hide elements
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
    }
    
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.transform = "translateY(30px)";
    }
    
    if (guaranteeBoxRef.current) {
      guaranteeBoxRef.current.style.opacity = "0";
      guaranteeBoxRef.current.style.transform = "translateY(30px)";
    }
    
    if (statsBoxRef.current) {
      statsBoxRef.current.style.opacity = "0";
      statsBoxRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Why offering section in view, animating...");
        
        // Animate title
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
          titleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
        
        // Animate content
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.opacity = "1";
            contentRef.current.style.transform = "translateY(0)";
            contentRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 300);

        // Animate guarantee box
        setTimeout(() => {
          if (guaranteeBoxRef.current) {
            guaranteeBoxRef.current.style.opacity = "1";
            guaranteeBoxRef.current.style.transform = "translateY(0)";
            guaranteeBoxRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        }, 500);
        
        // Animate stats box
        setTimeout(() => {
          if (statsBoxRef.current) {
            statsBoxRef.current.style.opacity = "1";
            statsBoxRef.current.style.transform = "translateY(0)";
            statsBoxRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        }, 700);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Social Proof Banner at top */}
        <div className="bg-accent/10 py-4 px-6 rounded-lg mb-12 text-center">
          <p className="text-xl font-bold text-secondary">
            <span className="text-primary">PROVEN RESULTS:</span> 1893 Buyer Leads Generated For Agents Just Like You In The Last 30 Days
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 text-secondary"
            >
              Why We're <span className="text-primary">Offering This</span>
            </h2>
            
            <div ref={contentRef}>
              <p className="text-lg mb-6 text-gray-700">
                Most lead generation programs in the real estate industry lock you into 12-month contracts with no guarantee of results. We're different.
              </p>
              
              <p className="text-lg mb-6 text-gray-700">
                Our 6-month program is designed to give you full control and transparency. We understand the frustration of being tied to long contracts that don't deliver, which is why we've structured our program differently.
              </p>
              
              <p className="text-lg mb-8 text-gray-700">
                We only succeed when you succeed - that's our philosophy. And that's why we're willing to make you the following guarantee that no one else in this industry can match:
              </p>
            </div>
            
            {/* Prominent Guarantee Box */}
            <div 
              ref={guaranteeBoxRef}
              className="bg-primary/10 border-2 border-primary rounded-xl p-8 shadow-lg mb-8"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary mr-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-2xl font-bold text-secondary">
                  LEADS IN <span className="text-primary">7 DAYS</span> OR FREE
                </h3>
              </div>
              
              <p className="text-lg mb-4">
                If we don't generate qualified buyer leads for you within the first 7 days, you get the first month completely free. No questions asked.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span><strong>Performance Guarantee:</strong> We deliver quality leads or you don't pay</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span><strong>Quality Assurance:</strong> All leads pre-qualified and verified</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span><strong>30-Day Satisfaction:</strong> Full refund if you're not completely satisfied</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Results Statistics Box */}
          <div 
            ref={statsBoxRef}
            className="md:w-1/2 bg-secondary text-white rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">
              WHY REAL ESTATE AGENTS CHOOSE US:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">Transparent Pricing</div>
                <p className="text-lg">No hidden fees, no long-term contracts, just clear and predictable costs with ROI you can measure.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">Real Estate Specific</div>
                <p className="text-lg">Campaigns designed specifically for real estate agents to attract high-intent buyers and sellers.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">Proven System</div>
                <p className="text-lg">A tested and refined approach that has worked for thousands of agents across the country.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">Expert Support</div>
                <p className="text-lg">Our team of specialists provides ongoing support to maximize your campaign performance.</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 px-4 py-2 rounded">
                  <i className="fas fa-award text-accent mr-2"></i>
                  <span>Top-rated program</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded">
                  <i className="fas fa-users text-accent mr-2"></i>
                  <span>2,500+ agents served</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded">
                  <i className="fas fa-map-marker-alt text-accent mr-2"></i>
                  <span>All 50 states</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById("cta");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-lg"
          >
            Secure Your Spot Before They're Gone <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyOfferingSection;