import { useEffect, useRef } from "react";

const ComparisonSection = () => {
  // Define types for better type safety
  // Define more specific types
  interface TextValue {
    value: string;
    isText: true;
  }
  
  interface CheckValue {
    value: true;
    label: string;
  }
  
  type ComparisonValue = boolean | TextValue | CheckValue;
  
  interface ComparisonRow {
    feature: string;
    diy: ComparisonValue;
    typical: ComparisonValue;
    leadMachine: { value: string | true; isText?: true; label?: string };
  }

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "The Real Cost",
      diy: { value: "$997-1,997 upfront for courses + $500-1,500/month ad spend + $500/month admin costs", isText: true },
      typical: { value: "$3,000-10,000 upfront + $1,000-2,000/month (ads + admin)", isText: true },
      leadMachine: { value: "$3,000 upfront + $500/month service + ad spend", isText: true }
    },
    {
      feature: "Time to First Results",
      diy: { value: "4-8 months (if ever)", isText: true },
      typical: { value: "2-4 months", isText: true },
      leadMachine: { value: "7 DAYS GUARANTEED", isText: true }
    },
    {
      feature: "Your Time Commitment",
      diy: { value: "15-20 hours/week building & managing everything yourself", isText: true },
      typical: { value: "8-10 hours/week implementing what you learn", isText: true },
      leadMachine: { value: "1-2 hours/week (just sales calls)", isText: true }
    },
    {
      feature: "Campaign Creation",
      diy: { value: "You spend weeks learning ads, writing copy, designing creatives", isText: true },
      typical: { value: "Basic templates you must customize yourself", isText: true },
      leadMachine: { value: "Custom campaigns built FOR YOU by experts", isText: true }
    },
    {
      feature: "Implementation",
      diy: { value: "100% Do-It-Yourself (steep learning curve)", isText: true },
      typical: { value: "You implement everything (technical nightmare)", isText: true },
      leadMachine: { value: "100% DONE FOR YOU", isText: true }
    },
    {
      feature: "Campaign Management",
      diy: { value: "You handle everything (ad fatigue, audience burnout, pixel issues)", isText: true },
      typical: { value: "Basic optimization advice only", isText: true },
      leadMachine: { value: "Professional team handles daily monitoring & optimization", isText: true }
    },
    {
      feature: "Industry Expertise",
      diy: { value: "Generic marketing advice not specific to real estate", isText: true },
      typical: { value: "One-size-fits-all approach", isText: true },
      leadMachine: { value: "Built by top-performing agents & professional media buyers", isText: true }
    },
    {
      feature: "Follow-Up System",
      diy: { value: "Build your own from scratch", isText: true },
      typical: { value: "Basic templates with no integration", isText: true },
      leadMachine: { value: "Complete system installed & customized for your business", isText: true }
    },
    {
      feature: "Lead Nurturing",
      diy: { value: "Manual follow-up (if you remember)", isText: true },
      typical: { value: "Basic email templates only", isText: true },
      leadMachine: { value: "Automated sequences that convert leads while you sleep", isText: true }
    },
    {
      feature: "Live Training",
      diy: { value: "None or recorded videos only", isText: true },
      typical: { value: "Monthly group call with dozens of others", isText: true },
      leadMachine: { value: "TWO LIVE TRAININGS EVERY WEEK", isText: true }
    },
    {
      feature: "Sales Conversion",
      diy: { value: "No training on how to convert leads", isText: true },
      typical: { value: "Generic scripts that don't work in today's market", isText: true },
      leadMachine: { value: "Custom scripts + live role play + weekly coaching", isText: true }
    },
    {
      feature: "Support When Issues Arise",
      diy: { value: "None (you're on your own)", isText: true },
      typical: { value: "Generic email support with 48+ hour response time", isText: true },
      leadMachine: { value: "Private communication with rapid response", isText: true }
    },
    {
      feature: "Risk Level",
      diy: { value: "High (most agents fail and waste thousands)", isText: true },
      typical: { value: "Medium (results vary greatly)", isText: true },
      leadMachine: { value: "LOW (7-day lead guarantee)", isText: true }
    },
    {
      feature: "Time to ROI",
      diy: { value: "6-12 months (if ever)", isText: true },
      typical: { value: "3-6 months", isText: true },
      leadMachine: { value: "As fast as 30 days", isText: true }
    },
    {
      feature: "Total Value",
      diy: { value: "Unpredictable (most never see ROI)", isText: true },
      typical: { value: "Mediocre results with high effort", isText: true },
      leadMachine: { value: "EXCEPTIONAL ($19,888 VALUE)", isText: true }
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

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
    
    if (tableRef.current) {
      tableRef.current.style.opacity = "0";
      tableRef.current.style.transform = "translateY(20px)";
    }
    
    rowRefs.current.forEach(row => {
      if (row) {
        row.style.opacity = "0";
      }
    });
    
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(30px)";
    }
    
    // Setup intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Comparison section in view, animating...");
        
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
        
        // Animate table container
        setTimeout(() => {
          if (tableRef.current) {
            tableRef.current.style.opacity = "1";
            tableRef.current.style.transform = "translateY(0)";
            tableRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          }
          
          // Animate rows sequentially
          rowRefs.current.forEach((row, index) => {
            setTimeout(() => {
              if (row) {
                row.style.opacity = "1";
                row.style.transition = "opacity 0.5s ease";
                
                // Highlight specific cells with a slight delay for emphasis
                const leadMachineCell = row.cells[3];
                if (leadMachineCell) {
                  setTimeout(() => {
                    leadMachineCell.style.backgroundColor = "#f0f9ff";
                    leadMachineCell.style.transition = "background-color 0.5s ease";
                    
                    // Return to original background after a moment
                    setTimeout(() => {
                      leadMachineCell.style.backgroundColor = "";
                    }, 500);
                  }, 300);
                }
              }
            }, 400 + (index * 100));
          });
        }, 400);
        
        // Animate CTA last
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            
            // Add a pulsing animation to the button
            const button = ctaRef.current.querySelector('button');
            if (button) {
              setTimeout(() => {
                button.classList.add('animate-pulse');
              }, 1000);
            }
          }
        }, 1400);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.getElementById("pricing");
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
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
          >
            WHY <span className="text-primary">AMBITIOUS AGENTS</span> CHOOSE US
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            Compare our 6-Month Lead Machine to other options and see why we deliver superior results for real estate professionals.
          </p>
        </div>
        
        <div 
          ref={tableRef}
          className="overflow-x-auto"
        >
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">DIY Approach</th>
                <th className="py-4 px-6 text-center">Generic Lead Gen Companies</th>
                <th className="py-4 px-6 text-center bg-primary">6-Month Lead Machine</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr 
                  key={index}
                  ref={el => rowRefs.current[index] = el}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.feature === "Implementation Approach" || 
                     row.feature === "Ad Creation & Management" || 
                     row.feature === "Time Investment Required" || 
                     row.feature === "Speed to First Lead" || 
                     row.feature === "Real Estate Specialization" || 
                     row.feature === "Follow-Up System" ||
                     row.feature === "Learning Curve" ? (
                      <div className="flex flex-col">
                        <span>{row.diy.value}</span>
                        {(row.diy.value === "None" || row.diy.value.includes("Not Built")) && 
                          <i className="fas fa-times text-red-500 text-xl mt-1"></i>
                        }
                      </div>
                    ) : (
                      row.diy.value === "None" || row.diy.value === "No Guarantee" || row.diy.value === "DIY Only" ? (
                        <div className="flex flex-col">
                          <i className="fas fa-times text-red-500 text-xl"></i>
                          <span className="text-sm mt-1">{row.diy.value}</span>
                        </div>
                      ) : (
                        <span>{row.diy.value}</span>
                      )
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.feature === "Implementation Approach" || 
                     row.feature === "Ad Creation & Management" || 
                     row.feature === "Time Investment Required" || 
                     row.feature === "Speed to First Lead" || 
                     row.feature === "Real Estate Specialization" || 
                     row.feature === "Follow-Up System" ||
                     row.feature === "Learning Curve" ? (
                      <div className="flex flex-col">
                        <span>{row.typical.value}</span>
                        {(row.typical.value === "None" || row.typical.value.includes("Not Built")) && 
                          <i className="fas fa-times text-red-500 text-xl mt-1"></i>
                        }
                      </div>
                    ) : (
                      row.typical.value === "None" || row.typical.value === "No Guarantee" || row.typical.value === "Monthly Group Call" ? (
                        <div className="flex flex-col">
                          <i className="fas fa-times text-red-500 text-xl"></i>
                          <span className="text-sm mt-1">{row.typical.value}</span>
                        </div>
                      ) : (
                        <span>{row.typical.value}</span>
                      )
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-neutral font-bold">
                    <div className="flex flex-col">
                      <span className="text-primary">{row.leadMachine.value}</span>
                      <i className="fas fa-check text-green-500 text-2xl mt-1"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-12 text-center"
        >
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
          >
            SECURE YOUR SPOT - ONLY 6 AVAILABLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
