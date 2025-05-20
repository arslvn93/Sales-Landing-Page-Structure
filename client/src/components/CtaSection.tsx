import { useEffect, useRef } from "react";

const CtaSection = () => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const overviewBoxRef = useRef<HTMLDivElement>(null);
  const pricingBoxRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const securityNoteRef = useRef<HTMLParagraphElement>(null);
  const faqTitleRef = useRef<HTMLHeadingElement>(null);
  const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initial setup - hide elements
    if (mainBoxRef.current) {
      mainBoxRef.current.style.opacity = "0";
      mainBoxRef.current.style.transform = "translateY(40px)";
    }
    
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
      descriptionRef.current.style.transform = "translateY(20px)";
    }
    
    if (overviewBoxRef.current) {
      overviewBoxRef.current.style.opacity = "0";
      overviewBoxRef.current.style.transform = "translateX(-20px)";
    }
    
    if (pricingBoxRef.current) {
      pricingBoxRef.current.style.opacity = "0";
      pricingBoxRef.current.style.transform = "translateX(20px)";
    }
    
    if (ctaButtonRef.current) {
      ctaButtonRef.current.style.opacity = "0";
      ctaButtonRef.current.style.transform = "scale(0.9)";
    }
    
    if (securityNoteRef.current) {
      securityNoteRef.current.style.opacity = "0";
    }
    
    if (faqTitleRef.current) {
      faqTitleRef.current.style.opacity = "0";
      faqTitleRef.current.style.transform = "translateY(20px)";
    }
    
    faqItemRefs.current.forEach(item => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
      }
    });
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("CTA section in view, animating...");
        
        // Animate main box
        if (mainBoxRef.current) {
          mainBoxRef.current.style.opacity = "1";
          mainBoxRef.current.style.transform = "translateY(0)";
          mainBoxRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
        
        // Sequence the animations inside the box
        setTimeout(() => {
          // Animate title and description
          if (titleRef.current) {
            titleRef.current.style.opacity = "1";
            titleRef.current.style.transform = "translateY(0)";
            titleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
          
          setTimeout(() => {
            if (descriptionRef.current) {
              descriptionRef.current.style.opacity = "1";
              descriptionRef.current.style.transform = "translateY(0)";
              descriptionRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            }
          }, 200);
          
          // Animate overview and pricing boxes
          setTimeout(() => {
            if (overviewBoxRef.current) {
              overviewBoxRef.current.style.opacity = "1";
              overviewBoxRef.current.style.transform = "translateX(0)";
              overviewBoxRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            }
          }, 400);
          
          setTimeout(() => {
            if (pricingBoxRef.current) {
              pricingBoxRef.current.style.opacity = "1";
              pricingBoxRef.current.style.transform = "translateX(0)";
              pricingBoxRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            }
          }, 600);
          
          // Animate CTA button with a scale effect
          setTimeout(() => {
            if (ctaButtonRef.current) {
              ctaButtonRef.current.style.opacity = "1";
              ctaButtonRef.current.style.transform = "scale(1)";
              ctaButtonRef.current.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
              
              // Add a pulse animation to the button after it appears
              setTimeout(() => {
                ctaButtonRef.current?.classList.add('animate-pulse');
              }, 1000);
            }
          }, 900);
          
          // Animate security note
          setTimeout(() => {
            if (securityNoteRef.current) {
              securityNoteRef.current.style.opacity = "1";
              securityNoteRef.current.style.transition = "opacity 0.6s ease";
            }
          }, 1100);
        }, 300);
        
        // Animate FAQ section after the main box
        setTimeout(() => {
          if (faqTitleRef.current) {
            faqTitleRef.current.style.opacity = "1";
            faqTitleRef.current.style.transform = "translateY(0)";
            faqTitleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
          
          // Animate FAQ items sequentially
          faqItemRefs.current.forEach((item, index) => {
            setTimeout(() => {
              if (item) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
                item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
              }
            }, 1800 + (index * 200));
          });
        }, 1500);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    // Start observing the section
    const section = document.getElementById("cta");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={mainBoxRef}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#1c1c1c] to-[#333333] text-white rounded-2xl p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              READY TO <span className="text-white font-extrabold underline">TRANSFORM</span> YOUR REAL ESTATE BUSINESS?
            </h2>
            <p 
              ref={descriptionRef}
              className="text-xl mb-8 text-white"
            >
              Spring Special: Ambitious Agent Lead Machine 6-Month Fast-Track System
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div 
              ref={overviewBoxRef}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-accent text-secondary w-8 h-8 flex items-center justify-center rounded-full mr-3">1</span>
                What You Get
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-white mr-3 mt-1"></i>
                  <span>Complete Done-For-You Lead Generation System</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-white mr-3 mt-1"></i>
                  <span>Professional Ad Creation & Copywriting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-white mr-3 mt-1"></i>
                  <span>Custom Drip Campaign Creation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-white mr-3 mt-1"></i>
                  <span>Weekly Conversion Coaching</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-white mr-3 mt-1"></i>
                  <span>6 Months of Campaign Management</span>
                </li>
              </ul>
            </div>
            
            <div 
              ref={pricingBoxRef}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-white text-[#193d65] w-8 h-8 flex items-center justify-center rounded-full mr-3">2</span>
                Spring Special Pricing
              </h3>
              <div className="mb-6">
                <p className="text-white mb-2">Initial payment:</p>
                <p className="text-3xl font-bold text-white">$3,000 <span className="text-sm font-normal">USD</span></p>
                <p className="text-white text-sm font-semibold">Save $4,000 off the standard price</p>
              </div>
              <div>
                <p className="text-white mb-2">Monthly payments:</p>
                <p className="text-xl text-white">$500/month <span className="text-sm font-normal">for 6 months</span></p>
                <p className="text-white text-sm font-semibold mt-2">"Leads in 7 Days" Guarantee</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              ref={ctaButtonRef}
              href="https://buy.stripe.com/14A7sL7fP3JB8j64O72Ji0M?success_url=https%3A%2F%2Fleadmachine.salesgenius.co%2Fthank-you" 
              className="inline-block bg-white hover:bg-gray-100 text-[#193d65] font-bold py-4 px-10 rounded-lg text-xl transition shadow-lg mb-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              SECURE YOUR SPOT - ONLY 6 AVAILABLE <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <p 
              ref={securityNoteRef}
              className="flex justify-center items-center text-sm text-gray-100"
            >
              <i className="fas fa-lock mr-2"></i> Secure payment • "Leads in 7 Days" guarantee • Limited Spring Special
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 
            ref={faqTitleRef}
            className="text-2xl font-bold mb-6 text-[#193d65]"
          >
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6 text-left">
            <div 
              ref={el => faqItemRefs.current[0] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-[#193d65]">How is this different from other real estate marketing programs?</h4>
              <p className="text-gray-600">Most programs give you training but expect YOU to implement everything yourself. We actually set up and manage your entire lead generation system FOR YOU, with guaranteed results in your first week.</p>
            </div>
            
            <div 
              ref={el => faqItemRefs.current[1] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-[#193d65]">Do I need technical skills to make this work?</h4>
              <p className="text-gray-600">Absolutely not! That's the whole point - our team handles all the technical aspects for you. We create the ads, set up the campaigns, build the automation, and manage everything. You focus on converting the leads we deliver.</p>
            </div>
            
            <div 
              ref={el => faqItemRefs.current[2] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-[#193d65]">What if I don't have a big advertising budget?</h4>
              <p className="text-gray-600">Our system is designed to be highly efficient with your ads. Most clients spend a maximum of $500 per month to see a great ROI.</p>
            </div>
            
            <div 
              ref={el => faqItemRefs.current[3] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-[#193d65]">How exactly does your "Leads in 7 Days" guarantee work?</h4>
              <p className="text-gray-600">It's simple: if we don't deliver actual leads to your CRM within 7 days of launching your campaign, you get a full refund of your initial payment. We make this guarantee because our system has been proven time and again with agents just like you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
