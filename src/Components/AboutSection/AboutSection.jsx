import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImage from './../../assets/Img/PROFILE.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const aboutSection = document.getElementById('about-section');
      const offsetTop = aboutSection.offsetTop;

      if (scrollTop > offsetTop - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="min-h-screen flex items-center bg-radial-gradient text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-8 lg:px-16">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, rotateY: 90, scale: 0.8, transition: { duration: 1 } }}
              className="md:w-1/2 flex justify-center mb-8 md:mb-0 cursor-pointer"
            >
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full shadow-md"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-black"
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1, delay: 0.5 } }}
          >
            <motion.span
              className="text-red-500"
              initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1, delay: 0.8 } }}
            >
              About
            </motion.span>
            <motion.span
              className="text-white"
              initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1, delay: 0.8 } }}
            >
              &nbsp;Me
            </motion.span>
          </motion.h1>
          <motion.p
            className="sm:text-xl md:text-2xl max-w-2xl font-Caveat p-6 rounded-[30px] bg-white text-black shadow-md"
            initial={{ opacity: 0, y: 50, rotateX: -90, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, rotateX: 0, scale: 1, transition: { duration: 1, delay: 0.6 } }}
          >
            Hey, I'm Dhiraj Bhawsar, a passionate developer with a knack for creating stunning web experiences. My journey in the tech world has been driven by curiosity and a constant desire to learn and innovate. From developing sleek user interfaces to architecting robust backend systems, I love every aspect of software development. Let's dive deeper into my story and explore what drives me to code.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
