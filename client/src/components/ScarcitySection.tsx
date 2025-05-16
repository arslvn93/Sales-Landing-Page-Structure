import { useEffect, useState, useRef } from "react";

const ScarcitySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "14",
    hours: "23",
    minutes: "59",
    seconds: "42"
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const countdownBoxRef = useRef<HTMLDivElement>(null);
  const countdownTitleRef = useRef<HTMLHeadingElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const spotsBoxRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  // Set countdown date (June 1, 2025)
  useEffect(() => {
    // Initial setup - hide elements
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
      descriptionRef.current.style.transform = "translateY(20px)";
    }
    
    if (countdownBoxRef.current) {
      countdownBoxRef.current.style.opacity = "0";
      countdownBoxRef.current.style.transform = "translateY(30px)";
    }
    
    if (countdownTitleRef.current) {
      countdownTitleRef.current.style.opacity = "0";
    }
    
    if (countdownRef.current) {
      countdownRef.current.style.opacity = "0";
      countdownRef.current.style.transform = "scale(0.9)";
    }
    
    if (spotsBoxRef.current) {
      spotsBoxRef.current.style.opacity = "0";
      spotsBoxRef.current.style.transform = "translateY(20px)";
    }
    
    if (progressBarRef.current) {
      progressBarRef.current.style.width = "0%";
    }
    
    if (noteRef.current) {
      noteRef.current.style.opacity = "0";
      noteRef.current.style.transform = "translateY(20px)";
    }
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Scarcity section in view, animating...");
        
        // Animate title and description
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
          titleRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
        
        setTimeout(() => {
          if (descriptionRef.current) {
            descriptionRef.current.style.opacity = "1";
            descriptionRef.current.style.transform = "translateY(0)";
            descriptionRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 200);
        
        // Animate countdown box
        setTimeout(() => {
          if (countdownBoxRef.current) {
            countdownBoxRef.current.style.opacity = "1";
            countdownBoxRef.current.style.transform = "translateY(0)";
            countdownBoxRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          }
          
          // Animate countdown title
          if (countdownTitleRef.current) {
            countdownTitleRef.current.style.opacity = "1";
            countdownTitleRef.current.style.transition = "opacity 0.5s ease";
          }
          
          // Animate countdown with a scale effect
          setTimeout(() => {
            if (countdownRef.current) {
              countdownRef.current.style.opacity = "1";
              countdownRef.current.style.transform = "scale(1)";
              countdownRef.current.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            }
          }, 300);
        }, 400);
        
        // Animate spots box
        setTimeout(() => {
          if (spotsBoxRef.current) {
            spotsBoxRef.current.style.opacity = "1";
            spotsBoxRef.current.style.transform = "translateY(0)";
            spotsBoxRef.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
          
          // Animate progress bar filling
          setTimeout(() => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = "70%";
              progressBarRef.current.style.transition = "width 1.5s ease-in-out";
            }
          }, 300);
        }, 800);
        
        // Animate note
        setTimeout(() => {
          if (noteRef.current) {
            noteRef.current.style.opacity = "1";
            noteRef.current.style.transform = "translateY(0)";
            noteRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        }, 1300);
        
        // Add pulse animation to button after everything has loaded
        setTimeout(() => {
          const button = spotsBoxRef.current?.querySelector('button');
          if (button) {
            // Add a class that applies the animation
            button.classList.add('animate-pulse');
          }
        }, 2000);
        
        // Disconnect observer once animation is triggered
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    // Start observing the section
    const section = document.querySelector(".scarcity-section");
    if (section) {
      observer.observe(section);
    }
    
    // Countdown timer functionality
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
    
    return () => {
      clearInterval(countdownTimer);
      observer.disconnect();
    };
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
    <section className="scarcity-section bg-[#193d65] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Limited <span className="text-white font-extrabold underline">Enrollment</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg max-w-3xl mx-auto text-gray-300"
          >
            To ensure personalized attention and maintain the highest level of service, we only accept a limited number of agents for each cohort.
          </p>
        </div>
        
        <div 
          ref={countdownBoxRef}
          className="bg-[#1c65b8]/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto mb-12"
        >
          <div className="text-center mb-8">
            <h3 
              ref={countdownTitleRef}
              className="text-2xl font-bold mb-2"
            >
              Next Cohort Starts In:
            </h3>
            <div 
              ref={countdownRef}
              className="flex justify-center space-x-4 mt-6" 
              id="countdown"
            >
              <div className="countdown-item bg-white text-[#193d65] rounded-lg p-4 min-w-[80px] shadow-lg">
                <div id="days" className="text-3xl font-bold countdown-value">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="countdown-item bg-white text-[#193d65] rounded-lg p-4 min-w-[80px] shadow-lg">
                <div id="hours" className="text-3xl font-bold countdown-value">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="countdown-item bg-white text-[#193d65] rounded-lg p-4 min-w-[80px] shadow-lg">
                <div id="minutes" className="text-3xl font-bold countdown-value">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="countdown-item bg-white text-secondary rounded-lg p-4 min-w-[80px] shadow-lg">
                <div id="seconds" className="text-3xl font-bold countdown-value">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
          
          <div 
            ref={spotsBoxRef}
            className="bg-secondary/70 rounded-lg p-6 text-center"
          >
            <h4 className="text-xl font-bold mb-2">Only <span className="text-accent">6 Spots</span> Remaining!</h4>
            <p className="mb-4">For the June 1st cohort - don't miss out!</p>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
              <div 
                ref={progressBarRef}
                className="bg-accent h-4 rounded-full" 
                style={{ width: "70%" }}
              ></div>
            </div>
            <button 
              onClick={() => scrollToSection("cta")} 
              className="inline-block bg-accent hover:bg-accent/90 text-secondary font-bold py-4 px-8 rounded-lg transition shadow-md"
            >
              Reserve Your Spot Now
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <p 
            ref={noteRef}
            className="text-lg mb-6"
          >
            <i className="fas fa-info-circle mr-2"></i> We've never offered this program before and <span className="text-accent font-bold">we're not sure if we'll offer it again</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
