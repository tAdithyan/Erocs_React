import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true); // Start animation after component mounts
    }, 500);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-700">
      {/* Circular Loader (Optional) */}
      <div className="loader mb-4"></div>

      {/* Animated XSTAR Text */}
      <div className="flex space-x-2  text-8xl font-bold">
        <span
          className={`transition-transform duration-1000 text-[#9FE800] ${
            animate ? "-translate-x-10 -translate-y-10 opacity-100" : "opacity-0"
          }`}
        >
          X
        </span>
        <span
          className={`transition-transform duration-1000 delay-200 text-white ${
            animate ? "translate-x-10 -translate-y-10 opacity-100" : "opacity-0"
          }`}
        >
          S
        </span>
        <span
          className={`transition-transform duration-1000 delay-400 text-white ${
            animate ? "-translate-x-10 translate-y-10 opacity-100" : "opacity-0"
          }`}
        >
          T
        </span>
        <span
          className={`transition-transform duration-1000 delay-600 text-white ${
            animate ? "translate-x-10 translate-y-10 opacity-100" : "opacity-0"
          }`}
        >
          A
        </span>
        <span
          className={`transition-transform duration-1000 delay-800 text-white ${
            animate ? "-translate-y-10 opacity-100" : "opacity-0"
          }`}
        >
          R
        </span>
      </div>

      {/* Loading Text */}
      <p className="animate-pulse text-white mt-12 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
