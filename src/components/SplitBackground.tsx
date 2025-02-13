import React from 'react';
import bgimg from '../assets/robot-working-office-instead-humans_23-2150911957.avif'
const SplitBackground = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Container */}
      <div className="fixed inset-0 w-full h-full">
        <div className="grid grid-cols-2 h-full">
          {/* Left Background */}
          <div className="relative overflow-hidden">
            <img 
              src="/api/placeholder/1000/1000"
              alt="Woman in business attire"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
          </div>
          
          {/* Right Background */}
          <div className="relative overflow-hidden">
            <img 
              src={bgimg}
              alt="Person working on laptop"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
          </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 py-20">
            {/* Left Card */}
            <div className="group cursor-pointer">
              <div className="mb-2">
                <span className="text-[#CDFF00] text-sm bg-black/50 px-4 py-1 rounded-full">
                  Creative
                </span>
              </div>
              <h2 className="text-white text-3xl mb-4 group-hover:text-[#CDFF00] transition-colors duration-300">
                A Simple Social Media Marketing Checklist
              </h2>
              <div className="flex items-center">
                <span className="text-[#CDFF00] mr-2">→</span>
              </div>
            </div>

            {/* Right Card */}
            <div className="group cursor-pointer">
              <div className="mb-2">
                <span className="text-[#CDFF00] text-sm bg-black/50 px-4 py-1 rounded-full">
                  Branding
                </span>
              </div>
              <h2 className="text-white text-3xl mb-4 group-hover:text-[#CDFF00] transition-colors duration-300">
                Transforming Challenges Into Opportunities
              </h2>
              <div className="flex items-center">
                <span className="text-[#CDFF00] mr-2">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Play Button */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-20 h-20 bg-[#CDFF00] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SplitBackground;