import { motion } from "framer-motion";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectOneImage from "./../../assets/Img/Gmail Project.png";
import ProjectTwoImage from "./../../assets/Img//gym.png";
import ProjectThreeImage from "./../../assets/Img/phone.png";
import ProjectFourImage from "./../../assets/Img/AgeCal.png";
import ProjectSixImage from "./../../assets/Img/PassGen.png";
import ProjectFiveImage from "./../../assets/Img/emoji.png";
import ProjectSevenImage from "./../../assets/Img/githubFinder.png"
import "./ProjectSection.scss";

// Material ui
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from '@mui/icons-material/Attachment';

const ProjectSection = () => {
  
  const projects = [
    {
      title: "Gmail Clone",
      description:
        "This Gmail clone project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
      link: "https://github.com/Dhirajbhavsar9900/Geekthone_GmailClone  ",
      image: ProjectOneImage,
      goLive: "https://geekthone-gmail-clone.vercel.app/",
    },
    {
        title: "GitHub Finder",
        description:
          "This Gmail clone project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
        link: "https://github.com/Dhirajbhavsar9900/Geekthone_GmailClone  ",
        image: ProjectSevenImage,
        goLive: "https://geekthone-gmail-clone.vercel.app/",
      },
    {
      title: "Gym Website ",
      description:
        "GymFit is a modern, responsive web application designed to provide users with a comprehensive fitness experience. The website showcases a variety of exercises through engaging GIFs, helping users to understand and perform exercises correctly.",
      link: "https://github.com/Dhirajbhavsar9900/GYMFIT-REACT",
      image: ProjectTwoImage,
      goLive: "https://gymfit-opal.vercel.app/  ",
    },
    {
      title: "Phone Search",
      description:
        "I developed a fully responsive mobile search website using HTML, CSS (Tailwind CSS), and JavaScript. This project demonstrates my skills in front-end web development and my ability to create dynamic, user-friendly interfaces. The website is designed to search for information on a particular website via an API, providing real-time results.",
      link: "https://github.com/Dhirajbhavsar9900/Iphone-web-Weakly-test-4-",
      image: ProjectThreeImage,
      goLive: "https://iphone-web-weakly-test-4.vercel.app/",
    },
    {
      title: "Age Calculator",
      description:
        "I developed a user-friendly Age Calculator using HTML, CSS, Tailwind, and JavaScript. This project demonstrates my skills in front-end development, including responsive design and interactive user interfaces. The Age Calculator allows users to input their birthdate and quickly find out their exact age in years, months, and days.",
      link: "https://github.com/Dhirajbhavsar9900/Age_Calculator",
      image: ProjectFourImage,
      goLive: "https://dhirajbhavsar9900.github.io/Age_Calculator/",
    },
    {
      title: "Emoji Search",
      description:
        "The Emoji Search Website is an interactive web application designed to help users find and copy their favorite emojis quickly and efficiently. This project was built using HTML, CSS, and JavaScript, with a focus on providing a seamless user experience through intuitive design and functionality.",
      link: "https://github.com/Dhirajbhavsar9900/Emojis_Searching_Project",
      image: ProjectFiveImage,
      goLive: "https://emojis-searching-project.vercel.app/",
    },
    {
      title: "PassWord Generator",
      description:
        "I developed a Password Generator website using React and Vite, aiming to provide users with a secure and convenient way to generate strong, random passwords. This project highlights my skills in modern frontend development, including state management, user interface design, and performance optimization with Vite.",
      link: "https://weakly-test-01.vercel.app/",
      image: ProjectSixImage,
      goLive: "https://github.com/Dhirajbhavsar9900/Weakly-Test-01",
    },
  ];
  

  return (
    <div
      id="project-section"
      className="py-24 px-5 text-center bg-slate-300 from-gray-200 to-gray-300"
    >
      <h2 className="text-5xl mb-14 font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
            <motion.div
            key={index}
            className="relative m-3 cursor-pointer flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96 project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.97 }}
          >
                <motion.div
                className="relative h-56 mx-4 mt-5 overflow-hidden rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
                whileHover={{ opacity: 0.9 }} // Reduce opacity on hover
                >
                <img src={project.image} alt="card-image" className="w-full h-full object-cover rounded-xl" />
                <motion.div
                    className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }} 
                >
                    <div className="absolute inset-0 bg-black opacity-70 rounded-xl "></div>
                    <div className="flex gap-12 justify-center mx-2 my-2 space-x-2 z-10">
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                    >
                        <GitHubIcon style={{ fontSize: "45px", fill :"#FFD700",}} />
                    </motion.a>
                    <motion.a
                        href={project.goLive}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                    >
                        <AttachmentIcon style={{ fontSize: "45px", fill: "#FBF9EF" }} />
                    </motion.a>
                    </div>
                </motion.div>
                </motion.div>
                <div className="p-6">
                <h5 className="block my-3 font-Josefin text-2xl font-semibold leading-snug text-white">
                    {project.title}
                </h5>
                <p className="block font-sans text-base text-gray-300 leading-relaxed">
                    {project.description}
                </p>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
