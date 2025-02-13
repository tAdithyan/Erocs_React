import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Mainpage from "./components/Mainpage";
import Loading from "./components/Loading";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Simulate page load time
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer if the component is unmounted
  }, []);

  return (
    <div>

      {isLoading ? <Loading/> : <Mainpage/>}


    </div>

  );
};

export default App;