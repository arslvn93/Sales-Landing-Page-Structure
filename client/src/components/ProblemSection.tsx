const ProblemSection = () => {
  const problems = [
    {
      icon: "fas fa-brain",
      title: "Information Overload",
      description: "Too much conflicting advice leaves businesses paralyzed and unable to take decisive action on lead generation."
    },
    {
      icon: "fas fa-chart-line",
      title: "No Proven System",
      description: "Without a clear roadmap to follow, they waste time and money on lead generation strategies that don't work."
    },
    {
      icon: "fas fa-users",
      title: "Lack of Expertise",
      description: "Going it alone means making avoidable mistakes that can cost thousands and delay success by years."
    }
  ];
  
  return (
    <section id="problem" className="bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary process-step">
            Why Most Businesses <span className="text-primary">Struggle</span> with Lead Generation
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 process-step">
            Despite investing in marketing, 68% of businesses struggle with generating a consistent flow of qualified leads. Here's why:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md process-step">
              <div className="text-primary text-3xl mb-4">
                <i className={problem.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-bold text-secondary mb-6 process-step">Do any of these challenges sound familiar?</p>
          <button 
            onClick={() => {
              const element = document.getElementById("solution");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Discover the Solution <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
