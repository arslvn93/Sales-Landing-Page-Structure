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
      feature: "Implementation Approach",
      diy: { value: "You Do Everything", isText: true },
      typical: { value: "You Do Everything", isText: true },
      leadMachine: { value: "100% Done For You", isText: true }
    },
    {
      feature: "Ad Creation & Management",
      diy: { value: "You Create & Manage", isText: true },
      typical: { value: "Templates Only", isText: true },
      leadMachine: { value: "Professional Team Handles Everything", isText: true }
    },
    {
      feature: "Time Investment Required",
      diy: { value: "10+ hours/week", isText: true },
      typical: { value: "5-7 hours/week", isText: true },
      leadMachine: { value: "1-2 hours/week", isText: true }
    },
    {
      feature: "Speed to First Lead",
      diy: { value: "4-8 weeks", isText: true },
      typical: { value: "2-4 weeks", isText: true },
      leadMachine: { value: "7 Days Guaranteed", isText: true }
    },
    {
      feature: "Real Estate Specialization",
      diy: { value: "Not Built By Agents", isText: true },
      typical: { value: "Not Built By Agents", isText: true },
      leadMachine: { value: "Built By Top Performing Agents & Professional Media Buyers", isText: true }
    },
    {
      feature: "Follow-Up System",
      diy: { value: "Build Your Own", isText: true },
      typical: { value: "Basic Templates", isText: true },
      leadMachine: { value: "Complete System Installed For You", isText: true }
    },
    {
      feature: "Conversion Training",
      diy: { value: "None", isText: true },
      typical: { value: "Generic Scripts", isText: true },
      leadMachine: { value: "Weekly Coaching & Custom Seasonal Scripts", isText: true }
    },
    {
      feature: "Technical Support",
      diy: { value: "None", isText: true },
      typical: { value: "Email Only", isText: true },
      leadMachine: { value: "Private Communication", isText: true }
    },
    {
      feature: "Ongoing Optimization",
      diy: { value: "DIY Only", isText: true },
      typical: { value: "Monthly Group Call", isText: true },
      leadMachine: { value: "Weekly Campaign Monitoring", isText: true }
    },
    {
      feature: "Accountability System",
      diy: { value: "None", isText: true },
      typical: { value: "Occasional Group Check-ins", isText: true },
      leadMachine: { value: "Weekly Live Accountability + Weekly Live Sales Training", isText: true }
    },
    {
      feature: "Money-Back Guarantee",
      diy: { value: "No Guarantee", isText: true },
      typical: { value: "No Guarantee", isText: true },
      leadMachine: { value: "7-Day Lead Guarantee", isText: true }
    },
    {
      feature: "Learning Curve",
      diy: { value: "Steep Learning Curve + No Conversion Training", isText: true },
      typical: { value: "Steep Technical Learning Curve", isText: true },
      leadMachine: { value: "No Tech Learning Curve, Just Learn To Convert", isText: true }
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
                <th className="py-4 px-6 text-center">Typical Lead Gen Course</th>
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
                    {typeof row.diy === 'boolean' ? (
                      row.diy ? (
                        <i className="fas fa-check text-yellow-500"></i>
                      ) : (
                        <i className="fas fa-times text-red-500"></i>
                      )
                    ) : (
                      'isText' in row.diy ? (
                        row.diy.value
                      ) : (
                        <>
                          <i className="fas fa-check text-yellow-500"></i>
                          {row.diy.label && <span className="ml-1">{row.diy.label}</span>}
                        </>
                      )
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.typical === 'boolean' ? (
                      row.typical ? (
                        <i className="fas fa-check text-yellow-500"></i>
                      ) : (
                        <i className="fas fa-times text-red-500"></i>
                      )
                    ) : (
                      'isText' in row.typical ? (
                        row.typical.value
                      ) : (
                        <>
                          <i className="fas fa-check text-yellow-500"></i>
                          {row.typical.label && <span className="ml-1">{row.typical.label}</span>}
                        </>
                      )
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-neutral font-bold">
                    {'isText' in row.leadMachine ? (
                      row.leadMachine.value
                    ) : (
                      <>
                        <i className="fas fa-check text-green-500"></i>
                        <span className="ml-1">{row.leadMachine.label}</span>
                      </>
                    )}
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
            Join the 94% Success Rate
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
