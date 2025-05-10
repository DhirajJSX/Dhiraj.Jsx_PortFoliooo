import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import Profile from "./../../assets/Img/Wink Emoji GIF - Wink Emoji Apple - Discover & Share GIFs.gif";
import "./header.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkIcon from "@mui/icons-material/Work";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSocialHandles, setShowSocialHandles] = useState(false);
  const profileRef = useRef(null);


  const hireMe = ()=>{
    console.log("Hello");
    
  }
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowSocialHandles((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100;

      const getOffset = (id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : Infinity;
      };

      const homeOffset = getOffset("home");
      const aboutOffset = getOffset("about-section");
      const skillsOffset = getOffset("skills");
      const projectsOffset = getOffset("project-section");
      const currentPosition = scrollY + buffer;

      if (currentPosition < aboutOffset) setActiveSection("home");
      else if (currentPosition < skillsOffset) setActiveSection("about");
      else if (currentPosition < projectsOffset) setActiveSection("skills");
      else setActiveSection("projects");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close social handle dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowSocialHandles(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between py-3">
        {/* Left: Profile */}
        <div className="flex gap-[120px] items-center">
          <motion.div
            id="pro"
            className="relative flex items-center pr-3 bg-white rounded-full shadow-xl cursor-pointer mr-2"
            ref={profileRef}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={Profile}
              alt="Profile"
              className="w-[60px] rounded-full shadow-2xl"
              onClick={handleProfileClick}
              whileTap={{ scale: 1.1, rotateZ: 360 }}
            />

            {showSocialHandles && (
              <motion.div
                id="socialHandle"
                className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg mt-2 flex flex-col text-sm z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {[
                  {
                    icon: <LinkedInIcon fontSize="large" />,
                    label: "Linkedin",
                    href: "https://www.linkedin.com/in/bhawsar-dhiraj/",
                  },
                  {
                    icon: <InstagramIcon fontSize="large" />,
                    label: "Instagram",
                    href: "https://www.instagram.com/dhiraj.bhawsar_/",
                  },
                  {
                    icon: <GitHubIcon fontSize="large" />,
                    label: "Github",
                    href: "https://github.com/Dhirajbhavsar9900",
                  },
                  {
                    icon: <WhatsAppIcon fontSize="large" />,
                    label: "Whatsapp",
                    href: "https://wa.me/+918999509230",
                  },
                ].map(({ icon, label, href }, idx) => (
                  <div
                    key={idx}
                    className="p-2 flex items-center hover:bg-[#111827] hover:text-white rounded-lg"
                  >
                    {icon}
                    <a
                      className="ml-2 font-Pacifico"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="text-[15px] font-bold hover:underline text-black whitespace-nowrap"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              DHIRAJ BHAWSAR
            </motion.h1>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.div
            className={`md:hidden ml-auto ${isMobileMenuOpen ? "active" : ""}`}
            onClick={handleMobileMenuClick}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="group rounded-lg flex items-center justify-center focus:outline-none">
              <div className="grid gap-1.5">
                <span
                  className={`h-[3px] w-6 bg-white rounded-full transition ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-[3px] w-6 bg-white rounded-full transition ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-[3px] w-6 bg-white rounded-full transition ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Navigation Menu */}
        <motion.div
          id="menu-div"
          className={`w-full md:w-auto rounded-full mt-2 md:mt-0 text-center md:flex md:items-center font-Josefin ${
            isMobileMenuOpen ? "block text-white" : "hidden"
          }`}
          initial={{ opacity: 0, scale: 0.8 }} // initial state with scale reduced
          animate={{ opacity: 1, scale: 1 }} // animate to full size with normal opacity
          transition={{ duration: 0.5 }} // duration for smooth transition
        >
          <ul
            className={`flex flex-col md:bg-black/90 md:p-1 rounded-full md:flex-row items-center gap-3`}
          >
            {[
              {
                id: "home",
                label: "Home",
                icon: <HomeIcon className="ml-1.5" />,
                bg: "bg-yellow-400",
              },
              {
                id: "about",
                label: "About Me",
                icon: <ContactSupportIcon className="ml-2" />,
                bg: "bg-cyan-500",
              },
              {
                id: "skills",
                label: "Skills",
                icon: <BarChartIcon className="ml-2" />,
                bg: "bg-fuchsia-500",
              },
              {
                id: "projects",
                label: "Projects",
                icon: <FormatPaintIcon className="ml-2" />,
                bg: "bg-green-400",
              },
            ].map(({ id, label, icon, bg }) => (
              <ScrollLink
                key={id}
                to={
                  id === "about"
                    ? "about-section"
                    : id === "projects"
                    ? "project-section"
                    : id
                }
                smooth={true}
                duration={400}
                className={`nav-link relative ${
                  isMobileMenuOpen ? "block" : "inline-block"
                }`}
                spy={true}
                activeClass="active"
                onClick={() => {
                  setActiveSection(id);
                  handleMobileMenuClick();
                }}
              >
                <li
                  className={`p-3.5 text-white flex justify-center items-center transition-all duration-200 cursor-pointer group ${
                    activeSection === id
                      ? `${bg} rounded-full`
                      : `hover:${bg} hover:rounded-full`
                  } w-full md:w-auto`}
                >
                  <span className="text-[17px]">{label}</span>
                  {icon}
                </li>
              </ScrollLink>
            ))}

            {/* Hire Me Button - Hidden on Desktop */}
            <li className="text-white flex justify-center items-center transition-all duration-200 cursor-pointer group md:hidden">
              <button className="relative inline-flex items-center justify-center px-4 py-3 overflow-hidden font-medium border border-gray-200 bg-white rounded-[12px] shadow-md group hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-auto">
                {/* Subtle blue glow effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-[12px] blur-sm"></span>

                {/* Inner content */}
                <span className="relative z-10 flex items-center font-Josefin text-black text-base tracking-wide">
                  <span className="mr-2">Hire Me</span>
                  <WorkIcon className="text-black transition-transform duration-300 group-hover:rotate-[6deg] group-hover:scale-110" />
                </span>
              </button>
            </li>
          </ul>
        </motion.div>

        <div className="hidden md:flex items-center justify-center ml-4">
          <button onClick={hireMe}  className="relative inline-flex items-center justify-center px-4 py-3 overflow-hidden font-medium border border-gray-200 bg-white rounded-[10px] shadow-md group hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-[12px] blur-sm"></span>
            <span className="relative z-10 flex items-center font-Josefin text-black text-base tracking-wide">
              <span className="mr-2">Hire Me</span>
              <WorkIcon className="text-black transition-transform duration-300 group-hover:rotate-[-20deg] group-hover:scale-105" />
            </span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
