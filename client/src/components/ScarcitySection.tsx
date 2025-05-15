import { useEffect, useState } from "react";

const ScarcitySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "14",
    hours: "23",
    minutes: "59",
    seconds: "42"
  });

  // Set countdown date (June 1, 2025)
  useEffect(() => {
    const countdownDate = new Date("June 1, 2025 23:59:59").getTime();
    
    const countdownTimer = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
        });
      } else {
        clearInterval(countdownTimer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
      }
    }, 1000);
    
    return () => clearInterval(countdownTimer);
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
    <section className="bg-secondary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 process-step">Limited <span className="text-accent">Enrollment</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 process-step">
            To ensure personalized attention and maintain our 94% success rate, we only accept a limited number of businesses per cohort.
          </p>
        </div>
        
        <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 process-step">Next Cohort Starts In:</h3>
            <div className="flex justify-center space-x-4 mt-6 process-step" id="countdown">
              <div className="countdown-item bg-white text-secondary rounded-lg p-4 min-w-[80px]">
                <div id="days" className="text-3xl font-bold countdown-value">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="countdown-item bg-white text-secondary rounded-lg p-4 min-w-[80px]">
                <div id="hours" className="text-3xl font-bold countdown-value">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="countdown-item bg-white text-secondary rounded-lg p-4 min-w-[80px]">
                <div id="minutes" className="text-3xl font-bold countdown-value">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="countdown-item bg-white text-secondary rounded-lg p-4 min-w-[80px]">
                <div id="seconds" className="text-3xl font-bold countdown-value">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/70 rounded-lg p-6 text-center process-step">
            <h4 className="text-xl font-bold mb-2">Only <span className="text-accent">7 Spots</span> Remaining!</h4>
            <p className="mb-4">Our previous cohort sold out in less than 48 hours.</p>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
              <div className="bg-accent h-4 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <button 
              onClick={() => scrollToSection("cta")} 
              className="inline-block bg-accent hover:bg-accent/90 text-secondary font-bold py-4 px-8 rounded-lg transition shadow-md pulse-btn"
            >
              Reserve Your Spot Now
            </button>
          </div>
        </div>
        
        <div className="text-center process-step">
          <p className="text-lg mb-6">
            <i className="fas fa-info-circle mr-2"></i> If you miss this cohort, the next one won't start until <span className="text-accent font-bold">3 months later</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
