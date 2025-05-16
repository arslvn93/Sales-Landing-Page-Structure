import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: "fas fa-cogs",
      title: "COMPLETE 6-MONTH LEAD GENERATION SYSTEM",
      description: "Our experts handle everything from A to Z, ensuring you have a consistent flow of quality real estate leads for a full 6 months.",
      includes: [
        "Professional Ad Creation & Copywriting",
        "Complete Facebook & Instagram Campaign Setup",
        "Google PPC Campaign Management",
        "Custom Landing Page Creation",
        "Comprehensive Lead Capture System",
        "Automated Lead Nurturing Sequences",
        "Weekly Lead Quality Monitoring",
        "Monthly Strategy Optimization",
        "Detailed Performance Analytics Dashboard",
        "Full 6 Months of Done-For-You Management"
      ]
    },
    {
      icon: "fas fa-comments",
      title: "WEEKLY LEAD CONVERSION COACHING",
      description: "Personal guidance to ensure you're turning those leads into appointments, clients, and closed deals.",
      includes: [
        "Weekly Group Coaching Sessions",
        "Live Q&A with Lead Conversion Experts",
        "Personalized Lead Follow-Up Strategy",
        "Accountability System & Progress Tracking",
        "Closing Technique Masterclass",
        "Monthly One-on-One Strategy Call",
        "Exclusive Access to Coach Via Private Chat"
      ]
    },
    {
      icon: "fas fa-tools",
      title: "COMPLETE LEAD CONVERSION TOOLKIT",
      description: "Everything you need to efficiently work your leads from first contact to closing day.",
      includes: [
        "Proven Lead Follow-Up Email Templates",
        "Text Message Scripts Library",
        "Call Scripts for Every Scenario",
        "Pre-Showing & Post-Showing Checklists",
        "Property Presentation Templates",
        "Buyer Consultation Framework",
        "Closing Day Preparation Guide"
      ]
    }
  ];

  const bonusFeatures = [
    {
      icon: "fas fa-comment-dots",
      title: "BONUS #1: THE COMPLETE OBJECTION CRUSHER LIBRARY",
      description: "Word-for-word scripts for handling every buyer objection, proven frameworks for turning hesitant prospects into eager clients, weekly \"Objection Spotlight\" addressing current market challenges.",
      value: "$997"
    },
    {
      icon: "fas fa-home",
      title: "BONUS #2: OPEN HOUSE PROFIT SYSTEM",
      description: "Maximize attendance at every open house, convert casual browsers into serious buyers, follow-up sequence that turns attendees into appointments.",
      value: "$497"
    },
    {
      icon: "fas fa-users",
      title: "BONUS #3: PAST CLIENT REACTIVATION BLUEPRINT",
      description: "Extract hidden value from your existing database, generate immediate referrals from past clients, non-pushy outreach templates that maintain relationships.",
      value: "$997"
    }
  ];

  const fastActionBonuses = [
    {
      icon: "fas fa-bolt",
      title: "FAST-ACTION BONUS: WEBSITE AUDIT",
      description: "Comprehensive Website Audit to identify and fix conversion bottlenecks and improve user experience.",
      value: "$497"
    },
    {
      icon: "fas fa-ad",
      title: "FAST-ACTION BONUS: LISTING AD TEMPLATES",
      description: "2 Custom Listing Ad Templates designed to showcase your properties and attract qualified buyers.",
      value: "$397"
    },
    {
      icon: "fas fa-user-friends",
      title: "FAST-ACTION BONUS: PRIVATE ONBOARDING",
      description: "One-on-one onboarding session to ensure your campaigns are perfectly tailored to your specific market and goals.",
      value: "$500"
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
            HERE'S EVERYTHING YOU GET WITH THE <span className="text-primary">6-MONTH LEAD MACHINE</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            Spring Special: Ambitious Agent Lead Machine 6-Month Fast-Track System
          </p>
        </div>
        
        {/* Main Features Section */}
        <h3 className="text-2xl font-bold text-center text-secondary mb-8">CORE OFFER COMPONENTS:</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              ref={el => featureRefs.current[index] = el}
              className="bg-white border-2 border-primary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="text-primary text-4xl mb-4 text-center">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center pb-2 border-b-2 border-gray-100">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4 flex-grow">
                <h4 className="font-bold text-secondary mb-2">INCLUDES:</h4>
                <ul className="space-y-1">
                  {feature.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              

            </div>
          ))}
        </div>
        
        {/* Regular Bonuses Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">
            <span className="bg-yellow-200 px-4 py-1 rounded">INCLUDED BONUSES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonusFeatures.map((feature, index) => (
              <div 
                key={index} 
                ref={el => featureRefs.current[index + mainFeatures.length] = el}
                className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-300"
              >
                <div className="text-primary text-3xl mb-3 text-center">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-lg font-bold mb-3 text-secondary text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <p className="text-accent font-bold text-center text-xl">Value: {feature.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fast Action Bonuses Section */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12">
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">
            <span className="text-primary">⚡ FAST ACTION BONUSES ⚡</span>
            <p className="text-sm text-gray-600 mt-2">Claim These When You Join Today</p>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fastActionBonuses.map((feature, index) => (
              <div 
                key={index} 
                ref={el => featureRefs.current[index + mainFeatures.length + bonusFeatures.length] = el}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-primary text-2xl mb-2">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-md font-bold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-gray-600 mb-3 text-xs">{feature.description}</p>
                <p className="text-accent font-bold text-sm">Value: {feature.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          ref={pricingBoxRef}
          className="mt-12 bg-primary rounded-xl p-8 text-white text-center max-w-3xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">TOTAL VALUE: <span className="text-accent">$19,888</span></h3>
          <p className="text-xl mb-6">YOUR INVESTMENT: <span className="text-accent font-bold">$3,000 upfront + $500/month for 6 months</span></p>
          <p className="text-lg mb-6">(Save $4,000 off the regular price of $10,000)</p>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition shadow-md"
          >
            SECURE YOUR SPOT - ONLY 6 AVAILABLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
