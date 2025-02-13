import React from 'react';

const MovingBanner = () => {
  const bannerItems = [
    'SOFTWARE AGENCY',
    'DIGITAL AGENCY',
    'PRODUCTS DESIGN',
    'CREATIVES AGENCY'
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#161616]  py-12">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center">
            {bannerItems.map((item, itemIndex) => (
              <div key={`${index}-${itemIndex}`} className="flex items-center mx-4">
                {/* Glowing Dot */}
                <div className="relative w-4 h-4 mr-4">
                  <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md animate-pulse" />
                </div>
                {/* Text */}
                <span className="text-white text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingBanner;