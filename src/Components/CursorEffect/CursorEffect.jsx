
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import HeroSection from './../HeroSection/HeroSection'
import ProjectSection from './../ProjectSection/ProjecSection'
import AboutSection from './../AboutSection/AboutSection'
import SkillSection from './../SkillSection/SkillSection'
import ScrollToTopButton from './../ScrollToTopButton/ScrollToTopButton'
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './CursorEffect';


function CursorEffect() {

  useEffect(() => {
    // Function to change cursor color to white when hovering over black text
    function addCursorHoverEffect() {
      const blackTextElements = document.querySelectorAll('.black-text');

      blackTextElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          document.querySelector('.cursor').classList.add('white-cursor');
        });

        element.addEventListener('mouseleave', () => {
          document.querySelector('.cursor').classList.remove('white-cursor');
        });
      });
    }

    // Call the function to add cursor hover effect
    addCursorHoverEffect();
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <Header />
      <ScrollToTopButton />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default CursorEffect;

