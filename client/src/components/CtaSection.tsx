const CtaSection = () => {
  return (
    <section id="cta" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-2xl p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 process-step">Ready to <span className="text-accent">Transform</span> Your Lead Generation?</h2>
            <p className="text-xl mb-8 process-step">
              Join our next cohort and get access to everything you need to build your reliable lead generation machine in 6 months or less.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg process-step">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-accent text-secondary w-8 h-8 flex items-center justify-center rounded-full mr-3">1</span>
                Program Overview
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>12 comprehensive video modules</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Bi-weekly group coaching calls for 6 months</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Complete lead generation toolkit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>Private business community</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                  <span>1-on-1 strategy session</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg process-step">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-accent text-secondary w-8 h-8 flex items-center justify-center rounded-full mr-3">2</span>
                Enrollment Options
              </h3>
              <div className="mb-6">
                <p className="text-gray-200 mb-2">One-time payment:</p>
                <p className="text-3xl font-bold">$1,997 <span className="text-sm font-normal">USD</span></p>
                <p className="text-accent text-sm">Save $594 vs. payment plan</p>
              </div>
              <div>
                <p className="text-gray-200 mb-2">Payment plan:</p>
                <p className="text-xl">3 payments of $863 <span className="text-sm font-normal">USD</span></p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block bg-accent hover:bg-accent/90 text-secondary font-bold py-4 px-10 rounded-lg text-xl transition shadow-lg mb-6 pulse-btn"
            >
              Secure Your Spot Now <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <p className="flex justify-center items-center text-sm">
              <i className="fas fa-lock mr-2"></i> Secure payment • 30-day money-back guarantee • Limited spots
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-secondary process-step">Frequently Asked Questions</h3>
          
          <div className="space-y-6 text-left">
            <div className="border border-gray-200 rounded-lg p-6 process-step">
              <h4 className="font-bold text-lg mb-3 text-secondary">How much time will I need to commit each week?</h4>
              <p className="text-gray-600">Most successful clients commit 3-5 hours per week. The program is designed for busy business owners who may be managing multiple responsibilities and projects.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 process-step">
              <h4 className="font-bold text-lg mb-3 text-secondary">Will this work for my industry?</h4>
              <p className="text-gray-600">The program has been successful across dozens of industries including professional services, e-commerce, SaaS, coaching, consulting, and local businesses. We can tailor strategies to your specific market.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 process-step">
              <h4 className="font-bold text-lg mb-3 text-secondary">How soon will I see results?</h4>
              <p className="text-gray-600">Most clients begin seeing initial results within the first 30-60 days. By the 6-month mark, you'll have a fully functioning lead generation system delivering consistent qualified prospects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
