// import { AnimatePresence, motion } from 'framer-motion'
// import { useState } from 'react'
// import { GoArrowUpRight } from 'react-icons/go'
// import { RxCross1 } from 'react-icons/rx'

// const DesktopNavbar = () => {

//   const[isMenuOpen,setIsMenuOpen]= useState(false)
//   return (
//     <nav className="fixed top-0 left-0 w-full flex justify-between px-8 md:py-6 sm:px-4 lg:px-12 z-[150] bg-[#161616] xl:bg-transparent backdrop-blur-3xl" >
//     {/* Logo */}
//     <div className="flex items-center space-x-8 sm:space-x-4 justify-between w-full">
//       <span className="text-5xl sm:text-4xl font-bold    px-8 py-8 animate-bounce ">
//         <span className="text-[#9FE800]">X</span>star
//       </span>

//       {/* Navigation Links for Larger Screens */}
//       <div className="hidden xl:flex items-center space-x-12 sm:space-x-4 mx-auto ">
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group bg-[#161616]">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//           HOME
//         </a>
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//           PAGES
//         </a>
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//           PORTFOLIO
//         </a>
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//           BLOG
//         </a>
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
//           SERVICES
//         </a>
//         <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
//           <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//           CONTACT US
//         </a>
//       </div>

//       {/* Get In Touch Button */}
//       <button className="relative overflow-hidden border border-white xl:px-8 px-2 py-3 text-sm group hover:text-black transition-all hidden xl:flex">
// <span className="relative z-10 group flex items-center justify-center gap-3 text-lg">
// <GoArrowUpRight className="transition-transform duration-300  text-2xl" />

//    Get In Touch</span>

// {/* Background animation */}
// <span className="absolute inset-0 bg-[#9FE800] transform origin-bottom-left scale-x-0 scale-y-0 transition-all duration-300 group-hover:scale-x-100 group-hover:scale-y-100"></span>
// </button>


//       {/* Hamburger Menu for Small Screens */}
//       <div className="xl:hidden z-[100]">
// <button 
//   onClick={() => setIsMenuOpen(!isMenuOpen)} 
//   className="text-white relative w-10 h-10 flex items-center justify-center"
// >
//   <div className="relative w-10 h-10">
//     {/* Hamburger Icon */}
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       className={`absolute w-12 h-12 transition-all duration-500 ease-in-out transform ${
//         isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
//       }`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//     </svg>

//     {/* Close (X) Icon */}
//     <RxCross1
//       className={`absolute w-10 h-10 text-[#9FE800] transition-all duration-500 ease-in-out transform ${
//         isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
//       }`}
//     />
//   </div>
// </button>
// </div>


//     </div>

//     {/* Mobile Menu */}
//     <AnimatePresence>
//     {isMenuOpen && (
//       <motion.div
//         className=" absolute top-0 left-0 w-full  px-8 flex flex-col min-h-80 rounded-b-lg z-50 bg-[#161616] py-10 "
//         // variants={containerVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{
//           type: 'spring',
//           stiffness: 300,
//           damping: 30,
//         }}
//       >
//            <div className="text-5xl sm:text-4xl font-bold  mb-10 mt-12">
//         <span className="text-[#9FE800]">X</span>star
//       </div>
//         {menuItems.map((item, index) => (
//           <motion.a
//             key={item}
//             href="#"
//             className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group"
//             variants={menuItemVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{
//               delay: index * 0.1,
//             }}
//           >
//             <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40" />
//             {item}
//           </motion.a>
//         ))}
//       </motion.div>
//     )}
//   </AnimatePresence>

//   </nav>
//   )
// }

// export default DesktopNavbar