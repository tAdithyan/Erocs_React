import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Daniel Smith",
    role: "Senior Engineer",
    image: "/api/placeholder/400/400",
    quote: "Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "/api/placeholder/400/400",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lead Designer",
    image: "/api/placeholder/400/400",
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className=" flex items-center justify-center px-4 py-12 md:px-6 w-full bg-[#161616]  min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-[#CDFF00]/20 w-40 md:w-56">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 h-full w-[2px] bg-[#CDFF00]/20 hidden md:block" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 relative text-center md:text-left p-5">
          <div className="mb-6 md:mb-8 px-4 md:px-16">
            <span className="text-[#CDFF00] text-4xl md:text-6xl font-serif">"</span>
            <p className="text-white text-base md:text-xl leading-relaxed mt-4">
              {testimonials[currentIndex].quote}
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-[#CDFF00] text-sm md:text-base">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className=" hidden md:flex md:flex-col gap-2 absolute md:static right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="p-4 md:p-6 rounded-full bg-black/50 hover:bg-[#CDFF00] text-white hover:text-black transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 md:p-6 rounded-full bg-black/50 hover:bg-[#CDFF00] text-white hover:text-black transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="hidden md:flex justify-center mt-6 gap-2 absolute bottom-4 w-full">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 md:w-8 rounded-full transition-colors ${index === currentIndex ? 'bg-[#CDFF00]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;