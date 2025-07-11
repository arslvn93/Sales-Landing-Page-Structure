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
  
  // Helper function to safely access value property
  const getValue = (item: ComparisonValue): string | undefined => {
    if (typeof item === 'boolean') return undefined;
    if ('value' in item) {
      return typeof item.value === 'string' ? item.value : undefined;
    }
    return undefined;
  };
  
  interface ComparisonRow {
    feature: string;
    diy: ComparisonValue;
    typical: ComparisonValue;
    leadMachine: { value: string | true; isText?: true; label?: string };
  }

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Time to First Results",
      diy: { value: "4-8 weeks", isText: true },
      typical: { value: "2-4 weeks", isText: true },
      leadMachine: { value: "7 DAYS GUARANTEED", isText: true }
    },
    {
      feature: "Your Time Commitment",
      diy: { value: "15-20 hours/week", isText: true },
      typical: { value: "8-10 hours/week", isText: true },
      leadMachine: { value: "1-2 hours/week", isText: true }
    },
    {
      feature: "Campaign Creation",
      diy: { value: "You spend weeks learning ads, writing copy, designing creatives", isText: true },
      typical: { value: "Lead gen only, no nurture", isText: true },
      leadMachine: { value: "Proven tested campaigns with automation", isText: true }
    },
    {
      feature: "Implementation",
      diy: { value: "100% Do-It-Yourself", isText: true },
      typical: { value: "You implement everything", isText: true },
      leadMachine: { value: "All ad setup completely done for you", isText: true }
    },
    {
      feature: "Campaign Management",
      diy: { value: "You handle everything", isText: true },
      typical: { value: "Basic optimization only", isText: true },
      leadMachine: { value: "Professional team handles daily monitoring", isText: true }
    },
    {
      feature: "Industry Expertise",
      diy: { value: "Generic marketing advice", isText: true },
      typical: { value: "Not built by real estate agents", isText: true },
      leadMachine: { value: "Built by top-performing agents & media buyers", isText: true }
    },
    {
      feature: "Follow-Up System",
      diy: { value: "Build from scratch", isText: true },
      typical: { value: "Basic templates (technical nightmare)", isText: true },
      leadMachine: { value: "Done for you", isText: true }
    },
    {
      feature: "Live Training",
      diy: { value: "None or recorded videos", isText: true },
      typical: { value: "Monthly group call", isText: true },
      leadMachine: { value: "Two live trainings every week", isText: true }
    },
    {
      feature: "Sales Conversion",
      diy: { value: "No training", isText: true },
      typical: { value: "Generic scripts", isText: true },
      leadMachine: { value: "Custom scripts + live role play", isText: true }
    },
    {
      feature: "Support",
      diy: { value: "None", isText: true },
      typical: { value: "Email support", isText: true },
      leadMachine: { value: "Private communication", isText: true }
    },
    {
      feature: "Risk Level",
      diy: { value: "High", isText: true },
      typical: { value: "Medium", isText: true },
      leadMachine: { value: "Low (7-day lead guarantee)", isText: true }
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
    <section id="pricing" className="bg-[#f5f5f5] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#193d65]"
          >
            WHY <span className="text-[#1c65b8]">AMBITIOUS AGENTS</span> CHOOSE US
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
              <tr className="bg-[#193d65] text-white">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">DIY Approach</th>
                <th className="py-4 px-6 text-center">Generic Lead Gen Companies</th>
                <th className="py-4 px-6 text-center bg-[#1c65b8]">6-Month Lead Machine</th>
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
                        <span>{getValue(row.diy)}</span>
                        {(getValue(row.diy) === "None" || getValue(row.diy)?.includes("Not Built")) && 
                          <i className="fas fa-times text-red-500 text-xl mt-1"></i>
                        }
                      </div>
                    ) : (
                      getValue(row.diy) === "None" || getValue(row.diy) === "No Guarantee" || getValue(row.diy) === "DIY Only" ? (
                        <div className="flex flex-col">
                          <i className="fas fa-times text-red-500 text-xl"></i>
                          <span className="text-sm mt-1">{getValue(row.diy)}</span>
                        </div>
                      ) : (
                        <span>{getValue(row.diy)}</span>
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
                        <span>{getValue(row.typical)}</span>
                        {(getValue(row.typical) === "None" || getValue(row.typical)?.includes("Not Built")) && 
                          <i className="fas fa-times text-red-500 text-xl mt-1"></i>
                        }
                      </div>
                    ) : (
                      getValue(row.typical) === "None" || getValue(row.typical) === "No Guarantee" || getValue(row.typical) === "Monthly Group Call" ? (
                        <div className="flex flex-col">
                          <i className="fas fa-times text-red-500 text-xl"></i>
                          <span className="text-sm mt-1">{getValue(row.typical)}</span>
                        </div>
                      ) : (
                        <span>{getValue(row.typical)}</span>
                      )
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-100 font-bold">
                    <div className="flex flex-col">
                      <span className="text-[#1c65b8]">{row.leadMachine.value}</span>
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
