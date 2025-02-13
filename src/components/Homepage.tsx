import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import { GiPlayButton } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const TypingAnimation: React.FC = () => {
  const word = "AGENCY";

  const textVariants: Variants = {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.span
      className="relative inline-block text-[3rem] sm:text-5xl md:text-6xl xl:text-8xl ms-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <span
        className="absolute left-0 top-0 text-transparent"
        style={{
          WebkitTextStroke: '2px #9FE800',
          textStroke: '2px #9FE800',
        } as React.CSSProperties}
      >
        {word}
      </span>

      <motion.div
        className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-[#9FE800]">{word}</span>
      </motion.div>

      <span className="opacity-0">{word}</span>
    </motion.span>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const containerVariants: Variants = {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' }
  };

  const menuItemVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItems: string[] = [
    'HOME',
    'PAGES',
    'PORTFOLIO',
    'BLOG',
    'SERVICES',
    'CONTACT US'
  ];

  return (
    <div className="min-h-screen text-white bg-[url('/src/assets/hero-bg1.png')] bg-cover bg-center relative">
      {/* Rest of the component remains the same */}
      {/* Navigation */}
      <nav className="flex justify-between px-8 md:py-6 sm:px-4 lg:px-12 z-[150] bg-[#161616] xl:bg-transparent">
        {/* Logo */}
        <div className="flex items-center space-x-8 sm:space-x-4 justify-between w-full">
          <span className="text-5xl sm:text-4xl font-bold px-8 py-8 animate-bounce">
            <span className="text-[#9FE800]">X</span>star
          </span>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden xl:flex items-center space-x-12 sm:space-x-4 mx-auto">
            {menuItems.map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group"
              >
                <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
                {item}
              </a>
            ))}
          </div>

          {/* Get In Touch Button */}
          <button className="relative overflow-hidden border border-white xl:px-8 px-2 py-3 text-sm group hover:text-black transition-all hidden xl:flex">
            <span className="relative z-10 group flex items-center justify-center gap-3 text-lg">
              <GoArrowUpRight className="transition-transform duration-300 text-2xl" />
              Get In Touch
            </span>
            <span className="absolute inset-0 bg-[#9FE800] transform origin-bottom-left scale-x-0 scale-y-0 transition-all duration-300 group-hover:scale-x-100 group-hover:scale-y-100"></span>
          </button>

          {/* Hamburger Menu for Small Screens */}
          <div className="xl:hidden z-[100]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white relative w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`absolute w-12 h-12 transition-all duration-500 ease-in-out transform ${
                    isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <RxCross1
                  className={`absolute w-10 h-10 text-[#9FE800] transition-all duration-500 ease-in-out transform ${
                    isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-0 w-full px-8 flex flex-col min-h-80 rounded-b-lg z-50 bg-[#161616] py-10"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="text-5xl sm:text-4xl font-bold mb-10 mt-12">
                <span className="text-[#9FE800]">X</span>star
              </div>
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group"
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="px-4 ">
        <div className="max-w-5xl  ">
          <h1 className="text-[4rem] sm:text-5xl md:text-6xl xl:text-8xl font-bold mt-12  2xl:mt-42 ">
            <motion.div
              className="hover:text-[#9FE800] transition-colors flex items-center gap-1 group text-[3rem] sm:text-5xl md:text-6xl xl:text-8xl font-bold tracking-tight"
              variants={menuItemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 1.5 }}
            >
              NEXT GENERATION
            </motion.div>
            
            <span className="italic font-normal text-[3rem] sm:text-5xl md:text-6xl xl:text-8xl">
              CREATIVE
            </span>

            <TypingAnimation />
          </h1>
        </div>

        <h1 className="absolute xl:bottom-16 text-2xl sm:text-3xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          1k + Brands Trust Us
        </h1>

        {/* Play Button */}
        <div className="absolute right-4 sm:right-16 md:right-3 xl:right-32 top-32 sm:top-36 md:top-44 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-42 lg:h-42">
            <div className="absolute w-full h-full rounded-full border border-white/30"></div>
            <div className="absolute w-full h-full animate-spin-slow rounded-full p-2">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <path
                  id="circularTextPath"
                  fill="transparent"
                  d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                />
                <text fontSize="10" className="sm:fontSize-12 md:fontSize-14" letterSpacing="2" fill="white">
                  <textPath href="#circularTextPath" startOffset="0%">
                    VIDEO - PLAY INTRO - VIDEO - PLAY INTRO -
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-lg">
              <GiPlayButton className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bottom-0 lg:grid grid-cols-2 absolute right-0 h-48 rounded-s-full bg-[#161616] hidden">
          <div className="bg-[url('/src/assets/bn-expri.png')] bg-cover bg-center rounded-s-full"></div>
          <div className="flex items-center justify-center w-full p-6">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-gray-500 mt-2">years of experience</div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-3xl font-bold">25K+</div>
              <div className="text-gray-500 mt-2">completed projects</div>
            </div>
          </div>
        </div>

        <div className="text-xs mt-32 bg-[#161616] grid grid-cols-2 gap-6 p-6 lg:hidden w-fit">
          <div>
            <div className="text-xl font-bold">12+</div>
            <div className="text-gray-500 mt-2">years of experience</div>
          </div>
          <div>
            <div className="text-xl font-bold">25K+</div>
            <div className="text-gray-500 mt-2">completed projects</div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute right-32 top-40 -z-10 hidden sm:block">
          <div className="w-80 h-80 bg-zinc-900 rotate-45 transform"></div>
        </div>
        <div className="absolute left-1/4 bottom-20 -z-10 hidden sm:block">
          <div className="w-60 h-60 bg-zinc-900 rotate-12 transform"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;