import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import ProfileImage from "./../../assets/Img/Untitled-3.png";
import Pdf from "./../../assets/pdf/DHIRAJBHAWSAR(resume).pdf";

const HeroSection = () => {
  const texts = useMemo(
    () => [
      "I'm Frontend Developer",
      "I'm Dhiraj",
      "How are you?",
      "Welcome to My Portfolio",
    ],
    []
  );
  const [displayedText, setDisplayedText] = useState("");
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
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, charIndex, currentTextIndex, texts]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Pdf;
    link.setAttribute("download", "DhirajBhawsarResume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(link);
  };

  const handleContactInfo = () => {
    window.open("mailto:Dhirajbhavsar.official@gmail.com");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-radial-gradient text-white "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center cursor-pointer">
          <motion.img
            id="HeroImg"
            src={ProfileImage}
            alt="Profile"
            className="w-full z-20"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: "0 0 100rem rgba(255, 255, 255, 0.2)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left  md:mb-0">
          <motion.h1
            id="heading1"
            className="sm:text-5xl md:text-6xl leading-tight text-[30px] font-bold "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <span className="font-FIra cursor-pointer">
              <span className="typing-effect">
                Hey!<span className="text-red-600">(</span>
                <span className="text-yellow-400">{displayedText}</span>
                <span className="text-red-600">)</span>
              </span>
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-col items-center md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4 font-Josefin font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            <motion.button
              id="btns"
              className="bg-white text-black hover:bg-black hover:text-white p-3 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownloadCV}
            >
              <div
                id="btn"
                className="flex justify-center items-center fill-black hover:fill-white"
              >
                <span className="p-1 fill-black hover:fill-white">
                  Download CV
                </span>
                <svg
                  className="m-2 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                </svg>
              </div>
            </motion.button>
            <motion.button
              id="btns"
              className="border border-white text-white p-3 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:border-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleContactInfo}
            >
              <div
                id="btn"
                className="flex justify-center px-3 py-1 items-center rounded-lg cursor-pointer transition-colors duration-200"
                role="button"
                aria-label="Email Me"
              >
                <span className="mr-2 text-white">Email Me</span>
                <svg
                  className="w-10 h-[27px] text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
