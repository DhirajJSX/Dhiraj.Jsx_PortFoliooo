import { motion } from "framer-motion";
import { GitHub, AttachFile } from "@mui/icons-material";
import "./ProjectSection.css";

import ProjectOneImage from "./../../assets/Img/Gmail Project.png";
import ProjectTwoImage from "./../../assets/Img/gym.png";
import ProjectThreeImage from "./../../assets/Img/phone.png";
import ProjectFourImage from "./../../assets/Img/AgeCal.png";
import ProjectFiveImage from "./../../assets/Img/emoji.png";
import ProjectSixImage from "./../../assets/Img/PassGen.png";
import ProjectSevenImage from "./../../assets/Img/githubFinder.png";
import ProjectImage from "./../../assets/Img/amazonwebsite.png";
import InstagramClone from "./../../assets/Img/InstagramClone.png";

// tech icons
import html from "./../../assets/Img/Html.png";
import css from "../../assets/Img/Css.png";
import react from "../../assets/Img/reactBasic.png";
import tailwind from "../../assets/Img/Tailwind.png";
import js from "../../assets/Img/JavaScript.png";
import firebase from "./../../assets/Img/firebase1.png";
import nodejs from "./../../assets/Img/BackendIcons/expressJs.png";
import expressJs from "./../../assets/Img/BackendIcons/db.png";
import mongoDb from "./../../assets/Img/BackendIcons/Node.png";
import framer from "./../../assets/Img/BackendIcons/framer.png";
import Jwt from "./../../assets/Img/BackendIcons/jwt.png";

const projects = [
  {
    title: "Instagram Clone",
    description:
      "A full-featured Instagram clone built using React.js, Firebase, MongoDB, Express.js, Tailwind CSS, and Socket.io. It replicates core Instagram features like image posting, commenting, real-time chat (in progress), and authentication via email and phone. Designed with a responsive UI, this project is the starting point for building my own creative and fully customized social media platform. Open to collaboration and contributions.",
    link: "https://github.com/DhirajJSX/InstagramClone-",
    image: InstagramClone,
    goLive: "https://dhirajbhawsar-portfolio.vercel.app/",
    tech: [react, tailwind, nodejs, expressJs, mongoDb, framer, Jwt],
  },
  {
    title: "Amazon Clone",
    description:
      "The Amazon Clone project is a dynamic web application that replicates the core functionalities and design aesthetics of the renowned e-commerce platform, Amazon. Developed using React.js for frontend, Vite for efficient build process, Tailwind CSS for styling, and Firebase for authentication, the Amazon Clone is a testament to modern web development technologies.",
    link: "https://github.com/DhirajJSX/AmazonClone_React-MCT-",
    image: ProjectImage,
    goLive: "https://amazon-clone-react-mct.vercel.app/",
    tech: [react, tailwind, firebase],
  },
  {
    title: "Gmail Clone",
    description:
      "This Gmail clone project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
    link: "https://github.com/DhirajJSX/Geekthone_GmailClone",
    image: ProjectOneImage,
    goLive: "https://geekthone-gmail-clone.vercel.app/",
    tech: [html, tailwind, js],
  },
  {
    title: "GitHub Finder",
    description:
      "This GitHub Finder project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
    link: "https://github.com/DhirajJSX/Github_Finder",
    image: ProjectSevenImage,
    goLive: "https://github-finder-xi-lac.vercel.app/",
    tech: [html, tailwind, js],
  },
  {
    title: "Gym Website",
    description:
      "GymFit is a modern, responsive web application designed to provide users with a comprehensive fitness experience. The website showcases a variety of exercises through engaging GIFs, helping users to understand and perform exercises correctly.",
    link: "https://github.com/DhirajJSX/GYMFIT-REACT",
    image: ProjectTwoImage,
    goLive: "https://gymfit-opal.vercel.app/",
    tech: [html, tailwind, js],
  },
  {
    title: "Phone Search",
    description:
      "I developed a fully responsive mobile search website using HTML, CSS (Tailwind CSS), and JavaScript. This project demonstrates my skills in front-end web development and my ability to create dynamic, user-friendly interfaces. The website is designed to search for information on a particular website via an API, providing real-time results.",
    link: "https://github.com/DhirajJSX/Iphone-web-Weakly-test-4-",
    image: ProjectThreeImage,
    goLive: "https://iphone-web-weakly-test-4.vercel.app/",
    tech: [html, tailwind, js],
  },
  {
    title: "Age Calculator",
    description:
      "I developed a user-friendly Age Calculator using HTML, CSS, Tailwind, and JavaScript. This project demonstrates my skills in front-end development, including responsive design and interactive user interfaces. The Age Calculator allows users to input their birthdate and quickly find out their exact age in years, months, and days.",
    link: "https://github.com/DhirajJSX/Age_Calculator",
    image: ProjectFourImage,
    goLive: "https://dhirajbhavsar9900.github.io/Age_Calculator/",
    tech: [html, css, js],
  },
  {
    title: "Emoji Search",
    description:
      "The Emoji Search Website is an interactive web application designed to help users find and copy their favorite emojis quickly and efficiently. This project was built using HTML, CSS, and JavaScript, with a focus on providing a seamless user experience through intuitive design and functionality.",
    link: "https://github.com/DhirajJSX/Emojis_Searching_Project",
    image: ProjectFiveImage,
    goLive: "https://emojis-searching-project.vercel.app/",
    tech: [html, css, js],
  },
  {
    title: "PassGenerator",
    description:
      "I developed a Password Generator website using React and Vite, aiming to provide users with a secure and convenient way to generate strong, random passwords. This project highlights my skills in modern frontend development, including state management, user interface design, and performance optimization with Vite.",
    link: "https://github.com/Dhirajbhavsar9900/Weakly-Test-01",
    image: ProjectSixImage,
    goLive: "https://weakly-test-01.vercel.app/",
    tech: [html, tailwind, js],
  },
];
const ProjectSection = () => {
  return (
    <section
      className="bg-[#f8fafc] dark:bg-slate-300 py-20 px-4 md:px-10"
      id="project-section"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            My Featured Projects
          </h2>
          <p className="text-md md:text-lg text-black mt-4">
            A selection of projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-8 items-start bg-white dark:bg-black rounded-2xl shadow-xl p-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full max-h-[400px]"
              />
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-white/10 backdrop-blur-sm shadow-sm transition hover:scale-105 hover:shadow-md"
                  >
                    <img src={tech} alt="tech" className="w-5 h-5" />
                  </div>
                ))}
              </div>

              {/* Links */}
               <div className="flex relative gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white border border-neutral-700 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-md shadow-black/40"
              >
                <GitHub className="text-yellow-400" /> GitHub
              </a>
              <a
                href={project.goLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white border border-neutral-700 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-md shadow-black/40"
              >
                <AttachFile className="text-white" /> Live Demo
              </a>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
