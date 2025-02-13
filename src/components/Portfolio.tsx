
const Portfolio = () => {
  return (
    <div className="min-h-screen text-white bg-[url('/src/assets/hero-bg1.png')]  bg-cover bg-center relative">
             <div className="bg-[#1A1A1A] absolute top-0 left-0 right-0 p-8 z-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
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
              <h2 className="text-white text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
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
              <h2 className="text-white text-2xl mt-4 transition-all duration-500 group-hover:text-xl group-hover:text-[#CDFF00]">
                Transforming Challenges Into Opportunities
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>



    
          
          
          </div>
  )
}

export default Portfolio