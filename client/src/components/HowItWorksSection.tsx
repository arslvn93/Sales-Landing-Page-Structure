const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Lead Strategy Development",
      description: "Establish your lead generation fundamentals, identify your ideal client profile, and craft a compelling value proposition that resonates with prospects."
    },
    {
      number: 2,
      title: "Lead Magnet Creation",
      description: "Create high-value lead magnets and implement rapid testing methodologies to validate your market's response before scaling your efforts."
    },
    {
      number: 3,
      title: "Funnel Implementation",
      description: "Develop your multi-channel lead generation funnel, create high-converting landing pages, and implement automated lead nurturing systems."
    },
    {
      number: 4,
      title: "Scale & Optimize",
      description: "Analyze performance metrics, refine your approach, and implement systems for sustainable lead generation growth and profitability."
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
    <section id="how-it-works" className="bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary process-step">
            How the <span className="text-primary">Program Works</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 process-step">
            Our proven system guides you through each critical stage of building your lead generation machine, from strategy to implementation.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center process-step">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-2 md:order-1">
                      <h3 className="text-2xl font-bold mb-3 text-secondary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative mb-8 md:mb-0">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10">
                        {step.number}
                      </div>
                      <div className="hidden md:block absolute left-0 right-0 h-1 bg-primary top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 flex justify-center order-1 relative mb-8 md:mb-0">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10">
                        {step.number}
                      </div>
                      <div className="hidden md:block absolute left-0 right-0 h-1 bg-primary top-1/2 transform -translate-y-1/2"></div>
                    </div>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12 order-2">
                      <h3 className="text-2xl font-bold mb-3 text-secondary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
          >
            Start Your Lead Generation Journey <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
