import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProjectSection from "./Components/ProjectSection/ProjecSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import SkillSection from "./Components/SkillSection/SkillSection";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Loader from "./Components/Loader/Loader"

import { useState, useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Header />
            <HeroSection />
            <ScrollToTopButton />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
