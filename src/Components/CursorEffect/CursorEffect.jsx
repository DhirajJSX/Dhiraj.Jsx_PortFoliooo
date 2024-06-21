import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Header from './../Header/Header';
import HeroSection from './../HeroSection/HeroSection';
import AboutSection from './../AboutSection/AboutSection';
import SkillSection from './../SkillSection/SkillSection';
import ProjectSection from './../ProjectSection/ProjecSection';
import Footer from '../Footer/Footer';
import ScrollToTopButton from './../ScrollToTopButton/ScrollToTopButton'
import './curosr.css';

function CursorEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    function moveCursor(e) {
      gsap.to(cursor, { duration: 0.3, left: e.clientX, top: e.clientY });
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

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
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
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
