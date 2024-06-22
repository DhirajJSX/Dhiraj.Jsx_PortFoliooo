import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutMeImage from './../../assets/Img/Hero Section memo.png';
import './AboutSection.css'


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
    
    <section id="about-section" className="min-h-screen flex items-center bg-slate-300 text-white py-[230px]">
      <div id="Contain" className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-8 lg:px-16">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-black self-center" 
          initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
          animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay: 0.5 } }}
        >
          <motion.span 
            className="text-red-600" 
            initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
            animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay: 0.8 } }}
          >
            About
          </motion.span>
          <motion.span 
            className="text-black"
            initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
            animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay: 0.8 } }}
          >
            &nbsp;Me
          </motion.span>
        </motion.h1>
          <motion.p id="pTag" className=" z-30 sm:text-xl hover:transition-all hover:duration-700 hover:shadow-2xl shadow-xl self-center md:text-2xl max-w-2xl font-Josefin p-7 rounded-[30px] bg-black text-white " initial={{ opacity: 0, x: -50 }} animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50,transition: { duration: 1, delay: 0.6 }}}>
            A passionate developer with a knack for creating stunning web experiences. My journey in the tech world has been driven by curiosity and a constant desire to learn and innovate. From developing sleek user interfaces to architecting robust backend systems, I love every aspect of software development. Lets dive deeper into my story and explore what drives me to code.
          </motion.p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
          <motion.img src={AboutMeImage} alt="Profile" className="w-[70%] md:[65%] lg:[50%] drop-shadow-2xl rounded-b shadow-red-500 " initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, transition: { duration: 1, delay: 0.6 } }}
          />
        </div>
      </div>
    </section>



  );
};

export default AboutSection;
