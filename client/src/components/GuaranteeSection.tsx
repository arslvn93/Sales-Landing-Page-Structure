const GuaranteeSection = () => {
  const guarantees = [
    "Participate in at least 4 coaching calls",
    "Complete the first 4 program modules",
    "Show that you've implemented the core strategies"
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
    <section className="bg-neutral py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-9xl text-primary mb-4 process-step">
              <i className="fas fa-certificate"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary process-step">
              Our 30-Day Money-Back <span className="text-primary">Guarantee</span>
            </h2>
            <p className="text-lg mb-6 text-gray-600 process-step">
              We're confident our program will deliver exceptional value. If you implement our strategies and don't see results, we'll refund 100% of your investment.
            </p>
            <ul className="space-y-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <li key={index} className="flex items-start process-step">
                  <div className="text-primary mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <p>{guarantee}</p>
                </li>
              ))}
            </ul>
            <div className="process-step">
              <button 
                onClick={() => scrollToSection("cta")} 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition shadow-md"
              >
                Start Risk-Free Today
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white p-8 rounded-xl shadow-xl process-step">
              <h3 className="text-2xl font-bold mb-6 text-secondary">What Our Clients Say</h3>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Business owner working on lead generation" 
                className="rounded-lg mb-6 w-full"
              />
              <div className="text-gray-700 italic mb-4">
                "I was skeptical at first and almost asked for a refund in week 2. But the coaches encouraged me to stick with it, and by month 3 I had already secured consistent lead flow generating 15 qualified prospects weekly. This program is worth every penny and more."
              </div>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" 
                  alt="David Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-bold">David Chen</h5>
                  <p className="text-sm text-gray-600">B2B Services Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
