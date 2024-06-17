import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "./../../assets/Img/Wink Emoji GIF - Wink Emoji Apple - Discover & Share GIFs.gif";
import "./header.css";
import { BrowserRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// Material Ui Imports
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSocialHandles, setShowSocialHandles] = useState(false);
  // const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    // const handleScroll = () => {
    //     const scrollTop = window.scrollY;
    //     if (scrollTop > 0) {
    //         setIsNavbarHidden(true);
    //     } else {
    //         setIsNavbarHidden(false);
    //     }
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //     window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowSocialHandles(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleProfileClick = () => {
    setShowSocialHandles(!showSocialHandles);
  };

  return (
    <motion.nav
      id="nav"
      className={`md:top-0 md:fixed fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row self-center justify-between md:px-14 pb-1  `}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      //   style={{
      //     background:
      //       "radial-gradient(circle, #111827 10%, rgba(0, 0, 0, 0.9) 100%)",
      //   }}
    >
      <div className="flex items-center md:mb-0 m-1 px-3">
        <div
          id="pro"
          className="relative flex justify-center items-center bg-white  rounded-[100%] mr-1 my-1"
          ref={profileRef}
        >
          <motion.img
            src={Profile}
            alt="Profile"
            className="w-[65px] rounded-full cursor-pointer m-1 shadow-2xl"
            onClick={handleProfileClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1, rotateZ: 360 }}
            animate={{
              y: [0, -3, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
          {showSocialHandles && (
            <motion.div
              id="socialHandle"
              className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg mx-2 my-1 flex flex-col text-[13px]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" p-2 flex item-center self-center-2xl hover:bg-[#111827] rounded-lg ">
                <svg
                  className="w-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
                <a
                  className="text-center self-center ml-2 font-Pacifico p-1"
                  href="https://www.linkedin.com/in/bhawsar-dhiraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>

              <div className=" p-2 flex item-center self-center-2xl hover:bg-[#111827]  rounded-lg ">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                <a
                  className="text-center self-center ml-1 font-Pacifico p-1"
                  href="https://www.instagram.com/dhiraj.bhawsar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instgram
                </a>
              </div>

              <div className=" p-2 flex item-center self-center-2xl hover:bg-[#111827]  rounded-lg">
                <svg
                  className="w-[27px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <a
                  className="text-center self-center ml-1 font-Pacifico p-1"
                  href="https://github.com/Dhirajbhavsar9900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>

              <div className=" p-2 flex item-center self-center-2xl hover:bg-[#111827]  rounded-lg ">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <a
                  className="text-center self-center ml-1 font-Pacifico p-1"
                  href="https://wa.me/+918999509230"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </div>
            </motion.div>
          )}
        </div>
        <motion.h1
          className="text-lg font-bold hover:underline text-white px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          DHIRAJ BHAWSAR
        </motion.h1>
        <motion.div
          className={`md:hidden ml-auto ${isMobileMenuOpen ? "active" : ""}`}
          onClick={handleToggleMobileMenu}
          whileHover={{ scale: 1.1 }}
        >
          <button className="group rounded-lg flex items-center justify-center focus:outline-none">
            <div className="grid justify-items-center gap-1.5">
              <span
                className={`h-[3px] w-6 rounded-full bg-white transition ${
                  isMobileMenuOpen ? " rotate-45 translate-y-2 " : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></span>
              <span
                className={`h-[3px] w-6 rounded-full bg-white transition ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              ></span>
              <span
                className={`h-[3px] w-6  rounded-full bg-white transition ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></span>
            </div>
          </button>
        </motion.div>
      </div>
      <motion.div
        id="menu-div"
        className={`text-center font-Josefin md:flex md:items-center text-black ${
          isMobileMenuOpen ? "block  text-white" : "hidden"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul
          className={`flex flex-col md:flex-row items-center p-1 font-extrabold 
  ${isMobileMenuOpen ? "m-10 " : "rounded-full bg-black bg-opacity-50 "}`}
        >
          <BrowserRouter>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`nav-link relative ${
                isMobileMenuOpen ? "block" : "inline-block"
              }`}
              onClick={handleLinkClick}
            >
              <li
                className={`p-3.5 font-extrabold text-white hover:text-black hover:bg-yellow-400 transition-all duration-200 hover:rounded-full flex justify-center items-center cursor-pointer group ${
                  isMobileMenuOpen ? "w-full text-center m-2" : ""
                }`}
              >
                <span>Home</span>
                <HomeIcon className="ml-1.5 mb-0.5 text-white group-hover:text-black transition duration-300" />
              </li>
            </ScrollLink>

            <ScrollLink
              to="about-section"
              smooth={true}
              duration={500}
              className={`nav-link relative ${
                isMobileMenuOpen ? "block" : "inline-block"
              }`}
              onClick={handleLinkClick}
            >
              <li
                className={`p-3.5 font-extrabold text-white hover:text-black hover:bg-cyan-500 transition-all duration-200 hover:rounded-full flex justify-center items-center cursor-pointer group ${
                  isMobileMenuOpen ? "w-full text-center m-2" : ""
                }`}
              >
                <span>About Me</span>
                <ContactSupportIcon className="ml-2 mb-0.5 self-center text-white group-hover:text-black transition duration-300" />
              </li>
            </ScrollLink>

            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className={`nav-link relative ${
                isMobileMenuOpen ? "block" : "inline-block"
              }`}
              onClick={handleLinkClick}
            >
              <li
                className={`p-3.5 font-extrabold text-white hover:text-black hover:bg-fuchsia-500 transition-all duration-200 hover:rounded-full flex justify-center items-center cursor-pointer group ${
                  isMobileMenuOpen ? "w-full text-center m-2" : ""
                }`}
              >
                <span>Skills</span>
                <BarChartIcon className="ml-2 mb-1 text-white group-hover:text-black transition duration-300" />
              </li>
            </ScrollLink>

            <ScrollLink
              to="project-section"
              smooth={true}
              duration={500}
              className={`nav-link relative ${
                isMobileMenuOpen ? "block" : "inline-block"
              }`}
              onClick={handleLinkClick}
            >
              <li
                className={`p-3.5 font-extrabold text-white hover:text-black hover:bg-green-400 transition-all duration-300 hover:rounded-full flex justify-center items-center cursor-pointer group ${
                  isMobileMenuOpen ? "w-full text-center m-2" : ""
                }`}
              >
                <span>Projects</span>
                <FormatPaintIcon className="ml-2 mb-0.5 text-white group-hover:text-black transition duration-300" />
              </li>
            </ScrollLink>
          </BrowserRouter>
        </ul>
      </motion.div> 
    </motion.nav>
  );
};

export default Header;