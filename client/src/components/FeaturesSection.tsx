const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-video",
      title: "12 Video Modules",
      description: "Step-by-step training covering every aspect of building your lead generation system, from strategy to implementation.",
      value: "$2,997"
    },
    {
      icon: "fas fa-users",
      title: "Bi-Weekly Group Coaching",
      description: "Live Q&A sessions with lead generation experts who provide personalized guidance and feedback on your campaigns.",
      value: "$4,500"
    },
    {
      icon: "fas fa-file-alt",
      title: "Lead Generation Toolkit",
      description: "Templates, scripts, and swipe files for every stage of your lead generation process, saving you hundreds of hours.",
      value: "$1,997"
    },
    {
      icon: "fas fa-comments",
      title: "Private Community",
      description: "Connect with fellow business owners, share insights, find partners, and get accountability for your lead generation efforts.",
      value: "$997"
    },
    {
      icon: "fas fa-headset",
      title: "1-on-1 Strategy Call",
      description: "A private 60-minute session with a lead generation specialist to create your personalized lead generation roadmap.",
      value: "$500"
    },
    {
      icon: "fas fa-tools",
      title: "Tech & Tools Guide",
      description: "Recommendations for the essential software and tools you need for effective lead generation, with exclusive discounts.",
      value: "$497"
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
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary process-step">
            What You'll <span className="text-primary">Get</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 process-step">
            Everything you need to transform your business into a lead generation powerhouse in 6 months or less.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral p-8 rounded-lg shadow-md process-step">
              <div className="text-primary text-3xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-accent font-bold">Value: {feature.value}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-primary rounded-xl p-8 text-white text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Total Value: <span className="text-accent">$11,488</span></h3>
          <p className="text-xl mb-6">Today's Price: <span className="text-accent font-bold">Just $1,997</span></p>
          <button 
            onClick={() => scrollToSection("cta")} 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition shadow-md pulse-btn"
          >
            Secure Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
