const ComparisonSection = () => {
  const comparisonRows = [
    {
      feature: "Structured Lead Generation Framework",
      diy: false,
      typical: { value: true, label: "Basic" },
      leadMachine: { value: true, label: "Comprehensive" }
    },
    {
      feature: "Live Expert Coaching",
      diy: false,
      typical: false,
      leadMachine: { value: true, label: "Bi-Weekly" }
    },
    {
      feature: "Community Support",
      diy: false,
      typical: { value: true, label: "Basic Forum" },
      leadMachine: { value: true, label: "Active Community" }
    },
    {
      feature: "Ready-to-Use Templates",
      diy: false,
      typical: { value: true, label: "Limited" },
      leadMachine: { value: true, label: "Complete Kit" }
    },
    {
      feature: "1-on-1 Strategy Session",
      diy: false,
      typical: false,
      leadMachine: { value: true, label: "Included" }
    },
    {
      feature: "Lead Quality Optimization",
      diy: false,
      typical: { value: true, label: "Basic" },
      leadMachine: { value: true, label: "Advanced" }
    },
    {
      feature: "Success Rate",
      diy: { value: "10%", isText: true },
      typical: { value: "40%", isText: true },
      leadMachine: { value: "94%", isText: true }
    },
    {
      feature: "Time to Results",
      diy: { value: "12-18 months", isText: true },
      typical: { value: "6-12 months", isText: true },
      leadMachine: { value: "3-6 months", isText: true }
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary process-step">
            How We <span className="text-primary">Compare</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 process-step">
            See why our program delivers superior results compared to other lead generation options.
          </p>
        </div>
        
        <div className="overflow-x-auto">
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
                <tr key={index} className="border-b border-gray-200 process-step">
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.diy ? (
                      row.diy.isText ? (
                        row.diy.value
                      ) : (
                        <>
                          <i className="fas fa-check text-yellow-500"></i>
                          {row.diy.label && <span className="ml-1">{row.diy.label}</span>}
                        </>
                      )
                    ) : (
                      <i className="fas fa-times text-red-500 comparison-x"></i>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.typical ? (
                      row.typical.isText ? (
                        row.typical.value
                      ) : (
                        <>
                          <i className="fas fa-check text-yellow-500"></i>
                          {row.typical.label && <span className="ml-1">{row.typical.label}</span>}
                        </>
                      )
                    ) : (
                      <i className="fas fa-times text-red-500 comparison-x"></i>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-neutral font-bold">
                    {row.leadMachine.isText ? (
                      row.leadMachine.value
                    ) : (
                      <>
                        <i className="fas fa-check text-green-500 comparison-check"></i>
                        {row.leadMachine.label && <span className="ml-1">{row.leadMachine.label}</span>}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md pulse-btn"
          >
            Join the 94% Success Rate
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
