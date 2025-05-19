import { useEffect, useRef } from "react";

const SalesLetterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const letterContentRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initial setup - hide elements
    if (headlineRef.current) {
      headlineRef.current.style.opacity = "0";
      headlineRef.current.style.transform = "translateY(30px)";
    }
    
    if (socialProofRef.current) {
      socialProofRef.current.style.opacity = "0";
      socialProofRef.current.style.transform = "translateY(30px)";
    }
    
    if (letterContentRef.current) {
      letterContentRef.current.style.opacity = "0";
      letterContentRef.current.style.transform = "translateY(30px)";
    }
    
    if (ctaButtonRef.current) {
      ctaButtonRef.current.style.opacity = "0";
      ctaButtonRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Sales letter section in view, animating...");
        
        // Animate social proof
        if (socialProofRef.current) {
          socialProofRef.current.style.opacity = "1";
          socialProofRef.current.style.transform = "translateY(0)";
          socialProofRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
        
        // Animate headline
        setTimeout(() => {
          if (headlineRef.current) {
            headlineRef.current.style.opacity = "1";
            headlineRef.current.style.transform = "translateY(0)";
            headlineRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        }, 300);
        
        // Animate letter content
        setTimeout(() => {
          if (letterContentRef.current) {
            letterContentRef.current.style.opacity = "1";
            letterContentRef.current.style.transform = "translateY(0)";
            letterContentRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          }
        }, 600);
        
        // Animate CTA button
        setTimeout(() => {
          if (ctaButtonRef.current) {
            ctaButtonRef.current.style.opacity = "1";
            ctaButtonRef.current.style.transform = "translateY(0)";
            ctaButtonRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        }, 800);
        
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
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Social Proof Stars */}
        <div 
          ref={socialProofRef}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="flex items-center text-accent mb-1">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-sm text-white">579 reviews</p>
        </div>
        
        {/* Big Bold Headline */}
        <h2 
          ref={headlineRef}
          className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight text-secondary max-w-5xl mx-auto"
        >
          "SPRING SPECIAL: THE <span className="text-primary">AMBITIOUS AGENT LEAD MACHINE</span> 6-MONTH FAST-TRACK SYSTEM"
        </h2>
        
        {/* Performance Metrics Box After Headline */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1c1c1c] text-white p-4 md:p-8 rounded-xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 text-center">
              REAL PERFORMANCE METRICS FROM CURRENT AGENT CAMPAIGNS:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">🎯</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">33.7 LEADS</div>
                <p className="text-sm font-medium mb-1 text-white">PER MONTH</p>
                <p className="text-xs text-white">for the typical agent in our program</p>
              </div>
              
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">💰</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">$6.20 COST</div>
                <p className="text-sm font-medium mb-1 text-white">PER LEAD</p>
                <p className="text-xs text-white">in our most efficient campaigns</p>
              </div>
              
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">📈</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">3.7% CLICK</div>
                <p className="text-sm font-medium mb-1 text-white">RATE</p>
                <p className="text-xs text-white">4.1x HIGHER than industry average of 0.9%</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">🚀</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">76% OF AGENTS</div>
                <p className="text-sm font-medium mb-1 text-white">see cost-per-lead</p>
                <p className="text-xs text-white">improvements within 90 days</p>
              </div>
              
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">👁️</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">20,000+</div>
                <p className="text-sm font-medium mb-1 text-white">MONTHLY AD</p>
                <p className="text-xs text-white">VIEWS for the average agent</p>
              </div>
              
              <div className="text-center p-2 bg-[#222] rounded-lg">
                <div className="text-4xl text-accent mb-2">📊</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">$11.80 AVERAGE</div>
                <p className="text-sm font-medium mb-1 text-white">COST PER LEAD</p>
                <p className="text-xs text-white">across all agents (55% below industry average)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sales Letter Content - Modern Style with Emojis and Highlights */}
        <div 
          ref={letterContentRef}
          className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6 px-4 md:px-0"
        >
          <p className="font-bold text-xl text-center text-secondary">👋 Dear Real Estate Agent Who Wants to Make 2025 Your Best Year Yet,</p>
          
          <p className="text-center">Let me ask you something important:</p>
          
          <p className="font-bold text-2xl text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent my-8">
            What's your plan to hit your sales targets before the end of 2025?
          </p>
          
          <p>With just 6 months left in the year, the ⏰ clock is ticking. And if you're like most agents we talk to, you're looking at your numbers and thinking:</p>
          
          <div className="bg-yellow-100 p-4 rounded-xl my-8 text-center shadow-sm">
            <p className="italic text-xl font-semibold text-secondary">"I need to make something happen... FAST."</p>
          </div>
          
          <p>That's exactly why we've created this special, limited-time opportunity that you won't see again this year.</p>
          
          <h3 className="text-2xl font-bold text-primary text-center mt-10 mb-4">
            🚀 Introducing: The Ambitious Agent Lead Machine 6-Month Fast-Track System
          </h3>
          
          <p className="text-center">A complete "we do it all for you" lead generation system specifically designed for ambitious agents who want quality leads without the headache of managing campaigns themselves.</p>
          
          <div className="bg-secondary/5 p-6 rounded-xl border-2 border-yellow-300 mt-8 shadow-sm">
            <h4 className="font-bold text-xl mb-2 flex items-center">
              <span className="text-2xl mr-2">💡</span> WHY IT WORKS FOR REAL ESTATE AGENTS IN THEIR 20s & 30s:
            </h4>
            <p>This is NOT like other lead generation programs. Our system is specifically designed for the modern real estate market and for agents who understand social media and digital marketing.</p>
            <p className="mt-4">We use cutting-edge targeting strategies to reach home buyers and sellers on the platforms they're already using - generating <mark className="bg-yellow-200 px-1">33.7 QUALIFIED LEADS PER MONTH</mark> for our typical agent.</p>
            <p className="font-bold mt-4 bg-yellow-100 p-2 rounded">⚠️ But the best part? You don't have to understand ANY of the technical stuff. We handle EVERYTHING for you.</p>
          </div>
          
          <p>That's why, for a very limited time (and for just 6 agents), we're offering something we've never done before: our complete lead generation system for exactly the 6 months remaining in 2025.</p>
          
          <p className="font-bold text-center text-primary text-xl my-4">👉 This isn't a watered-down version of our program.</p>
          
          <p>You'll get the EXACT SAME system that's delivering:</p>
          
          <ul className="list-none space-y-4 pl-6 my-8">
            <li className="flex items-start bg-yellow-50 p-3 rounded-lg">
              <span className="text-2xl mr-3">💰</span>
              <span><strong className="text-primary">$6.20 COST PER LEAD</strong> in our most efficient campaigns</span>
            </li>
            <li className="flex items-start bg-yellow-50 p-3 rounded-lg">
              <span className="text-2xl mr-3">👁️</span>
              <span><strong className="text-primary">20,000+ MONTHLY AD VIEWS</strong> for the average agent</span>
            </li>
            <li className="flex items-start bg-yellow-50 p-3 rounded-lg">
              <span className="text-2xl mr-3">📈</span>
              <span><strong className="text-primary">3.7% CLICK RATE</strong> (that's 4.1x higher than the industry average of 0.9%)</span>
            </li>
          </ul>
          
          <p className="text-center">The only difference? You're only committing to what's left of 2025.</p>
          
          <div className="border-2 border-primary rounded-xl p-6 shadow-lg mt-8 bg-orange-50">
            <div className="flex items-center mb-4">
              <div className="text-primary text-4xl mr-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.33398L35 8.33398V18.334C35 27.084 28.9167 35.2507 20 37.5007C11.0833 35.2507 5 27.084 5 18.334V8.33398L20 3.33398Z" fill="#FF5C00"/>
                  <path d="M20 17.834L12.5 17.834V12.834L20 12.834L27.5 12.834V17.834L20 17.834Z" fill="white"/>
                </svg>
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
                <span className="text-primary mt-1 mr-2 font-bold">●</span>
                <span><strong>Performance Guarantee:</strong> We deliver quality leads or you don't pay</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mt-1 mr-2 font-bold">●</span>
                <span><strong>Quality Assurance:</strong> All leads pre-qualified and verified</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mt-1 mr-2 font-bold">●</span>
                <span><strong>30-Day Satisfaction:</strong> Full refund if you're not completely satisfied</span>
              </li>
            </ul>
          </div>
          
          <h4 className="font-bold text-xl mt-12 flex items-center">
            <span className="text-2xl mr-2">🤔</span> WHY WE'RE OFFERING THIS SPRING SPECIAL
          </h4>
          
          <p>Two reasons:</p>
          
          <div className="bg-yellow-100 p-4 rounded-xl my-6">
            <p className="font-bold">1️⃣ We've found that while most real estate marketing agencies just churn out "leads," our clients succeed when we take a more hands-on approach. That's why our 6-month system focuses on both quantity AND quality.</p>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-xl my-6">
            <p className="font-bold">2️⃣ Spring and summer are the PERFECT time to establish your lead generation funnel so that you have a consistent flow of qualified buyers and sellers through the rest of 2025 and beyond.</p>
          </div>
          
          <p>Your competitors are going to ease off the gas. They'll wait until January to ramp up again.</p>
          
          <p>Meanwhile, you'll be capturing the quality leads they're ignoring – setting yourself up not just to finish 2025 strong, but to have a pipeline full of buyers going into 2026.</p>
          
          <div className="bg-gray-100 p-6 rounded-xl border-2 border-gray-200 mt-8">
            <p className="italic flex items-start">
              <span className="text-2xl mr-3">💬</span>
              Here's what Clair B, an agent with less than 12 months of experience, shared - now converting leads & doing more deals than veteran agents with 7+ years of experience:
            </p>
            <p className="mt-4 text-secondary bg-white p-4 rounded-lg">
              "50k cash renters... into Pre-Approved million dollar buyers! Text from post in person strategy session with my 'renter' clients - 'You are the absolute best Clair. I am getting things lined up for Dan the mortgage agent you introduced us too, hes awesome. After discussion last night it is clear that 'with approval' we will prefer to give the home ownership a good go!' BOOM Thank you again everyone for the support!"
            </p>
          </div>
          
          <div className="font-bold text-xl text-center mt-12 bg-yellow-100 p-4 rounded-xl">
            ⚠️ This special 6-month offer is only available until all 6 spots are filled.
          </div>
          
          <p className="text-center">After that, we'll return to our standard 12-month program.</p>
          
          <p className="text-center">So if you're serious about making 2025 your best year yet – and building unstoppable momentum going into 2026 – this is your opportunity.</p>
          
          <ul className="list-none space-y-4 mt-8">
            <li className="flex items-center bg-secondary/5 p-4 rounded-lg">
              <span className="text-2xl mr-3">✅</span>
              <span><strong>No risk</strong> (leads in 7 days or your money back)</span>
            </li>
            <li className="flex items-center bg-secondary/5 p-4 rounded-lg">
              <span className="text-2xl mr-3">⏱️</span>
              <span><strong>No waiting</strong> (our team implements everything within 48 hours)</span>
            </li>
            <li className="flex items-center bg-secondary/5 p-4 rounded-lg">
              <span className="text-2xl mr-3">💯</span>
              <span><strong>No excuses</strong> (just a proven system that delivers results when you need them most)</span>
            </li>
          </ul>
          
          <div className="text-center mt-12">
            <button 
              ref={ctaButtonRef}
              onClick={() => {
                const element = document.getElementById("cta");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-xl transition shadow-xl text-xl"
            >
              SECURE YOUR SPOT NOW – ONLY 6 SPOTS REMAINING 🔥
            </button>
          </div>
          
          <p className="text-center mt-10">To your success in 2025 and beyond,</p>
          <p className="text-center font-bold">Ryan & The Lead Machine Team ✌️</p>
          
          <div className="bg-yellow-50 p-4 rounded-xl mt-8 text-center">
            <p className="font-medium text-sm">
              ⏰ P.S. Remember, with only 6 months left in the year, every week matters. The sooner you start, the more time you have to convert leads into closings before December 31st. Don't wait until it's too late to hit your 2025 targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesLetterSection;