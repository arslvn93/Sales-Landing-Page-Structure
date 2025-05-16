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
          className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-2xl p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to <span className="text-accent">Transform</span> Your Lead Generation?
            </h2>
            <p 
              ref={descriptionRef}
              className="text-xl mb-8"
            >
              Join our next cohort and get access to everything you need to build your reliable lead generation machine in 6 months or less.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div 
              ref={overviewBoxRef}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-accent text-secondary w-8 h-8 flex items-center justify-center rounded-full mr-3">1</span>
                Program Overview
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>12 comprehensive video modules</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Bi-weekly group coaching calls for 6 months</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Complete lead generation toolkit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Private business community</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>1-on-1 strategy session</span>
                </li>
              </ul>
            </div>
            
            <div 
              ref={pricingBoxRef}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-accent text-secondary w-8 h-8 flex items-center justify-center rounded-full mr-3">2</span>
                Enrollment Options
              </h3>
              <div className="mb-6">
                <p className="text-gray-200 mb-2">One-time payment:</p>
                <p className="text-3xl font-bold">$1,997 <span className="text-sm font-normal">USD</span></p>
                <p className="text-accent text-sm">Save $594 vs. payment plan</p>
              </div>
              <div>
                <p className="text-gray-200 mb-2">Payment plan:</p>
                <p className="text-xl">3 payments of $863 <span className="text-sm font-normal">USD</span></p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              ref={ctaButtonRef}
              href="#" 
              className="inline-block bg-accent hover:bg-accent/90 text-secondary font-bold py-4 px-10 rounded-lg text-xl transition shadow-lg mb-6"
            >
              Secure Your Spot Now <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <p 
              ref={securityNoteRef}
              className="flex justify-center items-center text-sm"
            >
              <i className="fas fa-lock mr-2"></i> Secure payment • 30-day money-back guarantee • Limited spots
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 
            ref={faqTitleRef}
            className="text-2xl font-bold mb-6 text-secondary"
          >
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6 text-left">
            <div 
              ref={el => faqItemRefs.current[0] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-secondary">How much time will I need to commit each week?</h4>
              <p className="text-gray-600">Most successful clients commit 3-5 hours per week. The program is designed for busy business owners who may be managing multiple responsibilities and projects.</p>
            </div>
            
            <div 
              ref={el => faqItemRefs.current[1] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-secondary">Will this work for my industry?</h4>
              <p className="text-gray-600">The program has been successful across dozens of industries including professional services, e-commerce, SaaS, coaching, consulting, and local businesses. We can tailor strategies to your specific market.</p>
            </div>
            
            <div 
              ref={el => faqItemRefs.current[2] = el}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="font-bold text-lg mb-3 text-secondary">How soon will I see results?</h4>
              <p className="text-gray-600">Most clients begin seeing initial results within the first 30-60 days. By the 6-month mark, you'll have a fully functioning lead generation system delivering consistent qualified prospects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
