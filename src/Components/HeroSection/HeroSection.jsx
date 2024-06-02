import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import ProfileImage from './../../assets/Img/aaaaaaaaaaaa.jpg'; // Import your image here

const HeroSection = () => {
  const texts = useMemo(() => ["Hey! I'm Dhiraj", "How are you?", "Welcome to My Portfolio"], []);
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Wait before starting to delete
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150; // Adjust typing speed here
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, charIndex, currentTextIndex, texts]);

  return (
    <section className="min-h-screen flex items-center bg-radial-gradient text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mx-9 flex justify-center cursor-pointer">
          <motion.img
            id="HeroImg"
            src={ProfileImage}
            alt="Profile"
            className="w-full shadow-md"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 mx-9">
          <motion.h1
            id="heading1"
            className="sm:text-5xl md:text-6xl leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <span className="font-FIra cursor-pointer">
              <span className="typing-effect">
                Hey! <span className="text-red-600">(</span><span className="text-yellow-400">{displayedText}</span><span className="text-red-600">)</span>
              </span>
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
