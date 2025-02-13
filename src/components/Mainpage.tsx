import Homepage from './Homepage'
import MovingBanner from './MovingBanner'
import About from './About'
import ServicesSection from './Service'
import Portfolio from './Portfolio'
import TeamSection from './Teamsection'
import TestimonialCarousel from './TestimonialCarousel'
import ContactSection from './ContactSection'

const Mainpage = () => {

  return (
    <>
    {/* <Navbar/> */}

 
    <Homepage />
    <div className="w-full">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      <MovingBanner />
    </div>
    <About />
    <ServicesSection />
    
    <Portfolio />

    <TeamSection />

    <TestimonialCarousel/>
    <MovingBanner />

    <ContactSection />

  </>  )
}

export default Mainpage