import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Navbar = () => {
  return (
    <div className='bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-3xl'>

      {/* Navigation */}
      <nav className="flex justify-around px-8 py-6 bg-transparent text-white">
      {/* Navigation Links */}
        <div className="flex items-center space-x-20 justify-center ">
          <span className="text-7xl font-bold">
            <span className="text-[#9FE800]">X</span>star
          </span>
          
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            HOME
          </a>
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            PAGES
          </a>
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            PORTFOLIO
          </a>
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            BLOG
          </a>
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            SERVICES
          </a>
          <a href="#" className="text-xl hover:text-[#9FE800] transition-colors flex items-center gap-1 group">
            <GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/>
            CONTACT US
          </a>

          <button className="border border-white px-8 py-3 text-sm hover:bg-[#9FE800] hover:text-black hover:border-[#9FE800] transition-all">
            ↗ Get In Touch
          </button>
        </div>
      </nav>




    </div>
  )
}

export default Navbar