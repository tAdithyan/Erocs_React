import { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import MovingBanner from "./components/MovingBanner";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import About from "./components/About";
import ServicesSection from "./components/Service";
import Portfolio from "./components/Portfolio";
import TeamSection from "./components/Teamsection";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

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
    </>
  );
};

export default App;