const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Agency",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "Before this program, I was spending thousands on ads with inconsistent results. Within 3 months of implementing the Lead Machine system, our lead generation costs dropped by 60% while our qualified leads tripled. Our agency now has a waiting list of clients!"
    },
    {
      name: "Michael Rodriguez",
      role: "SaaS Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "The program gave me the exact blueprint I needed to generate consistent leads for our SaaS product. The coaching was instrumental—I avoided mistakes that would have cost me thousands of dollars and months of wasted effort. We've grown our user base by 215% in just 6 months."
    },
    {
      name: "Jennifer Lewis",
      role: "Real Estate Broker",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      content: "I was stuck in a cycle of feast or famine with my real estate business. This program helped me transform it into a predictable operation with consistent leads and closings. My income has tripled in just 6 months, and I've been able to hire two assistants to handle the growth."
    }
  ];

  const stats = [
    { value: 10452, label: "Businesses Served" },
    { value: 94, label: "Success Rate %" },
    { value: 87, label: "Million $ Generated" },
    { value: 180, label: "Days Average ROI" }
  ];
  
  return (
    <section id="testimonials" className="bg-secondary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 process-step">Success <span className="text-accent">Stories</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 process-step">
            Join the thousands of businesses who have transformed their lead generation with our program.
          </p>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:w-1/3 px-4 mb-8">
              <div className="bg-white text-secondary p-8 rounded-lg shadow-xl testimonial-card h-full process-step">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="text-accent">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="process-step">
                <div className="text-4xl font-bold text-accent counter" data-count={stat.value}>0</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
