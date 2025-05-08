import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import Profile from "./../../assets/Img/Wink Emoji GIF - Wink Emoji Apple - Discover & Share GIFs.gif";
import "./header.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSocialHandles, setShowSocialHandles] = useState(false);


  const profileRef = useRef(null);

  const handleMobileMenuClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100; // Adjust this to control when a section is considered active
    
      const getOffset = (id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : Infinity;
      };
    
      const homeOffset = getOffset("home");
      const aboutOffset = getOffset("about-section");
      const skillsOffset = getOffset("skills");
      const projectsOffset = getOffset("project-section");
    
      const currentPosition = scrollY + buffer;
    
      if (currentPosition < aboutOffset) {
        setActiveSection("home");
      } else if (currentPosition >= aboutOffset && currentPosition < skillsOffset) {
        setActiveSection("about");
      } else if (currentPosition >= skillsOffset && currentPosition < projectsOffset) {
        setActiveSection("skills");
      } else {
        setActiveSection("projects");
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfileClick = () => {
    setShowSocialHandles(!showSocialHandles);
  };

  return (
    <motion.nav
      id="nav"
      className={`md:top-0 md:fixed fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row self-center justify-between md:px-14 pb-1`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
              <LinkedInIcon fontSize="large" />

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
                <InstagramIcon   fontSize="large"/>
                <a
                  className="text-center self-center ml-1 font-Pacifico p-1"
                  href="https://www.instagram.com/dhiraj.bhawsar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>

              <div className=" p-2 flex item-center self-center-2xl hover:bg-[#111827]  rounded-lg">
                <GitHubIcon  fontSize="large" />
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
                <WhatsAppIcon  fontSize="large" />
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
          isMobileMenuOpen ? "block text-white" : "hidden"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul
          className={`flex flex-col md:flex-row items-center p-1 font-extrabold ${
            isMobileMenuOpen ? "m-10" : "rounded-full bg-black bg-opacity-50"
          }`}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={400}
            className={`nav-link relative ${
              isMobileMenuOpen ? "block" : "inline-block"
            }`}
            spy={true}
            activeClass="active"
            onClick={() => {
              setActiveSection("home");
              handleMobileMenuClick(); 
            }}
          >
            <li
              className={`p-3.5 font-extrabold text-white transition-all duration-200 flex justify-center items-center cursor-pointer group ${
                activeSection === "home"
                  ? " bg-yellow-400 rounded-full"
                  : " hover:bg-yellow-400 hover:rounded-full"
              } ${isMobileMenuOpen ? "w-full text-center m-2" : ""}`}
            >
              <span className="">Home</span>
              <HomeIcon className="ml-1.5 mb-0.5 text-white  transition duration-300" />
            </li>
          </ScrollLink>

          <ScrollLink
            to="about-section"
            smooth={true}
            duration={400}
            className={`nav-link relative ${
              isMobileMenuOpen ? "block" : "inline-block"
            }`}
            spy={true}
            activeClass="active"
            onClick={() => {
              setActiveSection("about");
              handleMobileMenuClick();
            }}
          >
            <li
              className={`p-3.5 font-extrabold text-white transition-all duration-200 flex justify-center items-center cursor-pointer group ${
                activeSection === "about"
                  ? " bg-cyan-500 rounded-full"
                  : " hover:bg-cyan-500 hover:rounded-full"
              } ${isMobileMenuOpen ? "w-full text-center m-2" : ""}`}
            >
              <span>About Me</span>
              <ContactSupportIcon className="ml-2 mb-0.5 self-center text-white  transition duration-300" />
            </li>
          </ScrollLink>

          <ScrollLink
            to="skills"
            smooth={true}
            duration={400}
            className={`nav-link relative ${
              isMobileMenuOpen ? "block" : "inline-block"
            }`}
            spy={true}
            activeClass="active"
            onClick={() => {
              setActiveSection("skills");
              handleMobileMenuClick(); 
            }}
          >
            <li
              className={`p-3.5 font-extrabold text-white transition-all duration-200 flex justify-center items-center cursor-pointer group ${
                activeSection === "skills"
                  ? " bg-fuchsia-500 rounded-full"
                  : " hover:bg-fuchsia-500 hover:rounded-full"
              } ${isMobileMenuOpen ? "w-full text-center m-2" : ""}`}
            >
              <span>Skills</span>
              <BarChartIcon className="ml-2 mb-1 text-white transition duration-300" />
            </li>
          </ScrollLink>

          <ScrollLink
            to="project-section"
            smooth={true}
            duration={400}
            className={`nav-link relative ${
              isMobileMenuOpen ? "block" : "inline-block"
            }`}
            spy={true}
            activeClass="active"
            onClick={() => {
              setActiveSection("projects");
              handleMobileMenuClick(); 
            }}
          >
            <li
              className={`p-3.5 font-extrabold text-white transition-all duration-200 flex justify-center items-center cursor-pointer group ${
                activeSection === "projects"
                  ? " bg-green-400 rounded-full"
                  : " hover:bg-green-400 hover:rounded-full"
              } ${isMobileMenuOpen ? "w-full text-center m-2" : ""}`}
            >
              <span>Projects</span>
              <BarChartIcon className="ml-2 mb-1 text-white transition duration-300" />
            </li>
          </ScrollLink>
         
        </ul>
      </motion.div>
      {/* desktop li list end*/}
    </motion.nav>
  );
};

export default Header;
