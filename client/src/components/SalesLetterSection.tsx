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
          <p className="text-sm text-gray-600">579 reviews</p>
        </div>
        
        {/* Big Bold Headline */}
        <h2 
          ref={headlineRef}
          className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight text-secondary max-w-5xl mx-auto"
        >
          "POSSIBLY THE BEST DEAL WE'VE EVER OFFERED FOR <span className="text-primary">REAL ESTATE AGENTS</span> WHO WANT TO FINISH 2025 STRONG"
        </h2>
        
        {/* Performance Metrics Box (Similar to book image in example) */}
        <div className="flex justify-center mb-16">
          <div className="bg-secondary text-white p-8 rounded-xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 text-center">
              REAL PERFORMANCE METRICS FROM CURRENT AGENT CAMPAIGNS:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl text-accent mb-2">🎯</div>
                <div className="text-3xl font-bold text-white mb-1">33.7 LEADS</div>
                <p className="text-sm font-medium mb-1">PER MONTH</p>
                <p className="text-xs">for the typical agent in our program</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl text-accent mb-2">💰</div>
                <div className="text-3xl font-bold text-white mb-1">$6.20 COST</div>
                <p className="text-sm font-medium mb-1">PER LEAD</p>
                <p className="text-xs">in our most efficient campaigns</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl text-accent mb-2">📈</div>
                <div className="text-3xl font-bold text-white mb-1">3.7% CLICK</div>
                <p className="text-sm font-medium mb-1">RATE</p>
                <p className="text-xs">4.1x HIGHER than industry average of 0.9%</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sales Letter Content - Modern Style with Emojis and Highlights */}
        <div 
          ref={letterContentRef}
          className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6"
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
            🚀 Introducing: The 6-Month Lead Machine
          </h3>
          
          <p className="text-center">A rare chance to get our proven lead generation system working for you for the next 6 months – specifically designed to help you crush your 2025 goals before the year ends.</p>
          
          <div className="bg-secondary/5 p-6 rounded-xl border-2 border-yellow-300 mt-8 shadow-sm">
            <h4 className="font-bold text-xl mb-2 flex items-center">
              <span className="text-2xl mr-2">💡</span> Here's the situation:
            </h4>
            <p>Our standard program is a comprehensive 12-month system that agents love. It works, it's reliable, and it's what has generated <mark className="bg-yellow-200 px-1">33.7 LEADS PER MONTH</mark> for our typical agent.</p>
            <p className="mt-4">But we understand something important: with only 6 months left in 2025, you might be hesitant to commit to a full year right now.</p>
            <p className="font-bold mt-4 bg-yellow-100 p-2 rounded">⚠️ You need results BEFORE December 31st. Not sometime next year.</p>
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
          
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 shadow-lg mt-8">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-secondary">
                And we're backing this with a guarantee no other company will match:
              </h3>
            </div>
            
            <p className="text-lg font-bold text-center bg-yellow-200 p-3 rounded-lg my-4">
              If we don't deliver actual leads to your CRM within 7 days, you get a complete refund.
            </p>
            <p className="mt-2 italic">Because if we can't deliver results immediately, how could we possibly help you hit your 2025 targets?</p>
          </div>
          
          <h4 className="font-bold text-xl mt-12 flex items-center">
            <span className="text-2xl mr-2">🤔</span> Why are we offering this special 6-month program right now?
          </h4>
          
          <p>Simple: The next 6 months are critical for hitting year-end goals. But they're also the months when most agents slow down their marketing, thinking "the year is almost over anyway."</p>
          
          <div className="bg-yellow-100 p-4 rounded-xl my-6">
            <p className="font-bold">That creates a MASSIVE opportunity for the agents who stay aggressive while everyone else pulls back.</p>
          </div>
          
          <p>Your competitors are going to ease off the gas. They'll wait until January to ramp up again.</p>
          
          <p>Meanwhile, you'll be capturing the quality leads they're ignoring – setting yourself up not just to finish 2025 strong, but to have a pipeline full of buyers going into 2026.</p>
          
          <div className="bg-gray-100 p-6 rounded-xl border-2 border-gray-200 mt-8">
            <p className="italic flex items-start">
              <span className="text-2xl mr-3">💬</span>
              Here's what one agent told us last November:
            </p>
            <p className="mt-4 text-secondary bg-white p-4 rounded-lg">
              "I almost didn't sign up because it was 'late in the year.' That would have been the biggest mistake of my career. While everyone checked out for the holidays, I closed 4 transactions in December from the leads you generated, then started January with 6 deals already in the pipeline. It was like getting a 3-month head start on everyone else."
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