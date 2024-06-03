import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import ProfileImage from './../../assets/Img/Untitled-3.png'; // Import your image here

const HeroSection = () => {
  const texts = useMemo(() => ["I'm Frontend Developer" , "I'm Dhiraj", "How are you?", "Welcome to My Portfolio"], []);
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

  const handleDownloadCV = () => {
    const pdfFilePath = '/path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.setAttribute('download', 'DHIRAJ_BHAWSAR_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
``};
  return (
    <section className="min-h-screen flex items-center bg-radial-gradient text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2  flex justify-center cursor-pointer">
          <motion.img
            id="HeroImg"
            src={ProfileImage}
            alt="Profile"
            className="w-full shadow-md"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left  md:mb-0">
          <motion.h1
            id="heading1"
            className="sm:text-5xl md:text-6xl leading-tight text-[40px] font-bold "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <span className="font-FIra cursor-pointer">
              <span className="typing-effect">
                Hey!<span className="text-red-600">(</span><span className="text-yellow-400">{displayedText}</span><span className="text-red-600">)</span>
              </span>
            </span>
          </motion.h1>

          <motion.div className="mt-8 flex justify-center md:justify-start space-x-4 font-Josefin font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}>
            <motion.button className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-2xl shadow-md   transition duration-300 ease-in-out transform hover:scale-105" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div id='btn' className='flex justify-center items-center fill-black hover:fill-white '   onClick={handleDownloadCV}  >
                <span className='p-1  fill-black hover:fill-white'>Download CV</span>
                <svg className='m-2 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>
              </div>
            </motion.button>
            <motion.button className=" border border-white text-white p-2 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:border-white " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div id='btn' className='flex justify-center items-center'>
                <span className='p-1  fill-white '>About Me </span>
                <svg className='m-2 w-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
