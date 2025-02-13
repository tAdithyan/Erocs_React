import React, { useState, useEffect, useRef } from 'react';
import aiimage from '../assets/download.png';

// Custom hook to replace react-intersection-observer
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting && options.triggerOnce) {
        observer.disconnect();
      }
    }, {
      threshold: options.threshold || 0,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
};

const CounterAnimation = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-5xl md:text-6xl font-bold text-white flex items-baseline">
        {count}
        <span className="text-[#9FE800] ml-1">+</span>
      </div>
      <span className="text-gray-400 mt-2">{label}</span>
    </div>
  );
};

const AboutCompany = () => {
  return (
    <div className="bg-[#161616]  flex items-center">
      <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image Column - Reordered for mobile */}
  <div className="relative order-2 md:order-1">
    <div className="relative">
      {/* Border Corners */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#9FE800]" />
      <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#9FE800]" />
      
      <img 
        src={aiimage}
        alt="Professional working"
        className="w-full rounded-lg"
        data-aos="fade-up"
     data-aos-duration="3000"
      />
    </div>
  </div>

  {/* Content Column - Reordered for mobile */}
  <div className="space-y-8 order-1 md:order-2">
    <div>
      <span className="text-[#9FE800] bg-[#9FE800]/10 px-4 py-2 rounded-full text-sm">
        ABOUT COMPANY
      </span>
    </div>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
      We Create Impactful
      <span className="block italic text-gray-300">Digital Experiences</span>
    </h2>

    <div className="grid grid-cols-2 gap-8">
      <CounterAnimation 
        end={25} 
        duration={2000}
        label="Completed projects"
      />
      <CounterAnimation 
        end={1} 
        duration={1500}
        label="Brands Trust Us"
      />
    </div>

    <p className="text-gray-400 text-lg">
      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X.
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default AboutCompany;