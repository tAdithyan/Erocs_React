
// const Portfolio = () => {
//   return (
//     <div className="min-h-screen text-white bg-[url('/src/assets/hero-bg1.png')]  bg-cover bg-center relative ">
//              <div className="bg-[#1A1A1A] absolute top-12 left-0 right-0 p-8 z-100">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 gap-8">
//           {/* Left Card */}
//           <div className="group cursor-pointer">
//             <div className="overflow-hidden rounded-lg mb-4">
//               <img
//                 src="https://img.freepik.com/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043458.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid_sidr"
//                 alt="Typing on laptop"
//                 className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <div className="transition-all duration-500 group-hover:-translate-y-2">
//               <div className="inline-block">
//                 <span className="bg-black px-4 py-1.5 rounded-full text-sm text-white flex items-center gap-2">
//                   Creative
//                   <span className="text-xs">→</span>
//                 </span>
//               </div>
//               <h2 className="text-white text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
//                 A Simple Social Media Marketing Checklist
//               </h2>
//             </div>
//           </div>

import { GiPlayButton } from "react-icons/gi";
// import PlayButton from "./playButton";

//           {/* Right Card */}
//           <div className="group cursor-pointer">
//             <div className="overflow-hidden rounded-lg mb-4">
//               <img
//                 src="https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329533.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid_sidr"
//                 alt="Laptop and phone mockup"
//                 className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <div className="transition-all duration-500 group-hover:-translate-y-2">
//               <div className="inline-block">
//                 <span className="bg-black px-4 py-1.5 rounded-full text-sm text-white flex items-center gap-2">
//                   Branding
//                   <span className="text-xs">→</span>
//                 </span>
//               </div>
//               <h2 className="text-white text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
//                 Transforming Challenges Into Opportunities
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>



    
          
          
//           </div>
//   )
// }

// export default Portfolio



const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 bg-[url('https://gramentheme.com/html/xstar/assets/img/team/watch-bg01.png')] bg-cover bg-center"
        style={{ zIndex: -1 }}
      />
      
      {/* Scrollable Content */}
      <div className="relative min-h-screen overflow-y-auto">
        {/* Portfolio Content */}
        <div className="bg-[#1A1A1A] mt-12 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Left Card */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043458.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid_sidr"
                    alt="Typing on laptop"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="transition-all duration-500 group-hover:-translate-y-2">
                  <div className="inline-block">
                    <span className="bg-black px-4 py-1.5 rounded-full text-sm text-white flex items-center gap-2">
                      Creative
                      <span className="text-xs">→</span>
                    </span>
                  </div>
                  <h2 className="text-white text-xl md:text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
                    A Simple Social Media Marketing Checklist
                  </h2>
                </div>
              </div>

              {/* Right Card */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329533.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid_sidr"
                    alt="Laptop and phone mockup"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="transition-all duration-500 group-hover:-translate-y-2">
                  <div className="inline-block">
                    <span className="bg-black px-4 py-1.5 rounded-full text-sm text-white flex items-center gap-2">
                      Branding
                      <span className="text-xs">→</span>
                    </span>
                  </div>
                  <h2 className="text-white text-xl md:text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
                    Transforming Challenges Into Opportunities
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more content here to enable scrolling */}
        <div className=" md:mt-50 p-8  ">
          <div className=" mx-auto">
            <div className="  w-full relative ">
              {/* Additional content sections */}
              {/* You can duplicate the card structures here */}
<div className=" flex items-center justify-center ">
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
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#CDFF00] backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <GiPlayButton className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>
    </div>
  </div>             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;