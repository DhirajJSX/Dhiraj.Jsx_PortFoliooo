import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSection.css';
import ProfileImage from './../../assets/Img/Untitled design (13)-fotor-bg-remover-2024053113400.png'; // Import your image here

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;

    const typeText = () => {
      if (isTyping) {
        timeout = setTimeout(() => {
          setDisplayedText((prevText) => {
            const nextChar = text[prevText.length];
            if (nextChar) {
              return prevText + nextChar;
            } else {
              setIsTyping(false);
              setIsErasing(true);
              return prevText;
            }
          });
        }, 50); // Adjust typing speed here (milliseconds)
      }
    };

    const eraseText = () => {
      if (isErasing) {
        timeout = setTimeout(() => {
          setDisplayedText((prevText) => {
            const newText = prevText.slice(0, -1);
            if (newText) {
              return newText;
            } else {
              setIsErasing(false);
              setIsTyping(true);
              return '';
            }
          });
        }, 80); // Adjust erasing speed here (milliseconds)
      }
    };

    if (isTyping) {
      typeText();
    } else if (isErasing) {
      eraseText();
    }

    return () => clearTimeout(timeout);
  }, [text, displayedText, isTyping, isErasing]);

  return <>{displayedText}</>;
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-radial-gradient text-white">
      <div className="container mx-auto  flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 mx-9">
          <motion.h1
            id="heading1"
            className="text-[30px] sm:text-5xl md:text-6xl leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <span className="font-Pacifico cursor-pointer]">Welcome to My Portfolio...</span>
          </motion.h1>
          <motion.p
  className="sm:text-xl md:text-2xl max-w-md md:mx-0 mt-4 font-Caveat shadow-xl p-6 rounded-[30px] bg-white text-black"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
>
  <TypingEffect text="Hey, I'm Dhiraj Bhawsar, a passionate developer with expertise in creating stunning web experiences. Explore my projects and learn more about my journey in the tech world." />
</motion.p>

        </div>
        <div className="md:w-1/2 mx-9 flex justify-center cursor-pointer">
          <AnimatePresence>
            <motion.img
              id="HeroImg"
              src={ProfileImage}
              alt="Profile"
              className="w-[360px] h-[400px] rounded-[100px] shadow-md md:w-full md:h-full md:rounded-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
