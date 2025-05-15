import { useState } from "react";

const TestComponent = () => {
  const [showColors, setShowColors] = useState(false);
  
  return (
    <div className="container mx-auto p-10 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">Test Component</h1>
      <p className="text-xl mb-4">If you can see this, React is rendering correctly!</p>
      
      <button 
        onClick={() => setShowColors(!showColors)}
        className="bg-secondary text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showColors ? "Hide Colors" : "Show Colors"}
      </button>
      
      {showColors && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-primary text-white font-bold rounded">Primary</div>
          <div className="p-4 bg-secondary text-white font-bold rounded">Secondary</div>
          <div className="p-4 bg-accent text-secondary font-bold rounded">Accent</div>
          <div className="p-4 bg-neutral font-bold rounded">Neutral</div>
          <div className="p-4 bg-white border font-bold rounded">White</div>
          <div className="p-4 bg-background font-bold rounded">Background</div>
        </div>
      )}
    </div>
  );
};

export default TestComponent;