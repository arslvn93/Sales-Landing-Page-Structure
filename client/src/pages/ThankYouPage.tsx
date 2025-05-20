import { useEffect, useRef } from "react";

const ThankYouPage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation for thank you page elements
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transition = "opacity 0.8s ease";
        }
      }, 300);
    }

    if (messageRef.current) {
      messageRef.current.style.opacity = "0";
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.style.opacity = "1";
          messageRef.current.style.transition = "opacity 0.8s ease";
        }
      }, 600);
    }

    if (iconRef.current) {
      iconRef.current.style.opacity = "0";
      iconRef.current.style.transform = "scale(0.8)";
      setTimeout(() => {
        if (iconRef.current) {
          iconRef.current.style.opacity = "1";
          iconRef.current.style.transform = "scale(1)";
          iconRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex flex-col justify-center items-center p-6">
      <div className="max-w-3xl mx-auto text-center">
        <div 
          ref={iconRef}
          className="text-8xl mb-8 text-green-500 mx-auto"
        >
          <svg viewBox="0 0 24 24" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M7 12.5L10.5 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Congratulations! You're In!
        </h1>
        
        <div 
          ref={messageRef}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto"
        >
          <p className="text-xl text-white mb-6">
            Your spot in the <span className="text-[#1c65b8] font-bold">Ambitious Agent Lead Machine</span> has been secured.
          </p>
          
          <p className="text-lg text-white mb-6">
            Please check your email for the next steps and instructions on how to book your private onboarding session.
          </p>
          
          <p className="text-lg text-white">
            We're excited to start working with you and helping you generate high-quality leads for your real estate business!
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-block bg-[#1c65b8] hover:bg-[#193d65] text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
            >
              Return to Homepage
            </a>
          </div>
        </div>
        
        <p className="text-white mt-8">
          Need help? Contact us at <a href="mailto:support@salesgenius.co" className="text-[#1c65b8] underline">support@salesgenius.co</a>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;