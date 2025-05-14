import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

// Image Imports
import Html from "../../assets/Img/Html.png";
import Css from "../../assets/Img/Css.png";
import Sass from "../../assets/Img/Sass.png";
import Tailwind from "../../assets/Img/Tailwind.png";
import Javascript from "../../assets/Img/JavaScript.png";
import ReactImg from "../../assets/Img/React.png";
import Redux from "../../assets/Img/redux,js.png";
import GSAPLogo from "../../assets/Img/BackendIcons/Gsap.png";
import FramerMotion from "../../assets/Img/BackendIcons/framer.png";
import Git from "../../assets/Img/git.png";
import Github from "../../assets/Img/Github.png";
import NodeJS from "../../assets/Img/BackendIcons/Node.png";
import Express from "../../assets/Img/BackendIcons/expressJs.png";
import MongoDB from "../../assets/Img/BackendIcons/db.png";
import Firebase from "../../assets/Img/BackendIcons/Firebase.png";
import JwtImage from "../../assets/Img/BackendIcons/jwt.png";
import Figma from "../../assets/Img/figma.png";
import PostMan from "../../assets/Img/BackendIcons/ThunderClient.png";
import MaterialUi from "../../assets/Img/Material Ui.png";

const frontendSkills = [
  { name: "HTML", image: Html },
  { name: "CSS", image: Css },
  { name: "Sass", image: Sass },
  { name: "Tailwind CSS", image: Tailwind },
  { name: "JavaScript", image: Javascript },
  { name: "React.js", image: ReactImg },
  { name: "Redux", image: Redux },
  { name: "GSAP", image: GSAPLogo },
  { name: "Framer Motion", image: FramerMotion },
  { name: "Git", image: Git },
  { name: "GitHub", image: Github },
  { name: "Figma", image: Figma },
  { name: "Material UI", image: MaterialUi }
];

const backendSkills = [
  { name: "Node.js", image: NodeJS },
  { name: "Express.js", image: Express },
  { name: "MongoDB", image: MongoDB },
  { name: "PostMan", image: PostMan },
  { name: "Firebase", image: Firebase },
  { name: "JWT", image: JwtImage }
];

const generateRandomColors = (length) => {
  const getRandomHex = () => {
    const letters = "0123456789ABCDEF";
    return "#" + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("");
  };
  return Array.from({ length }, getRandomHex);
};

const SkillCard = ({ skill, color }) => (
  <div
    className="flex flex-col items-center bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div className="p-6 flex flex-col items-center">
      <img src={skill.image} alt={skill.name} className="w-20 h-20 object-contain mb-3" />
      <p className="text-white text-base font-medium text-center">{skill.name}</p>
    </div>
  </div>
);

const SkillGrid = ({ skills, colors }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        variants={index % 2 === 0 ? leftDelayVariant : rightDelayVariant}
        initial="hidden"
        whileInView="visible"
        custom={index} // Pass the index for delay calculation
        viewport={{ once: true, amount: 0.3 }}
      >
        <SkillCard skill={skill} color={colors[index]} />
      </motion.div>
    ))}
  </div>
);

const leftDelayVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.2, delay: index * 0.1, ease: "easeOut" }
  })
};

const rightDelayVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.2, delay: index * 0.1, ease: "easeOut" }
  })
};

const SkillSection = () => {
  const frontendRef = useRef([]);
  const backendRef = useRef([]);
  
  const frontendColors = useMemo(() => generateRandomColors(frontendSkills.length), []);
  const backendColors = useMemo(() => generateRandomColors(backendSkills.length), []);
  
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">My Skills</h1>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          My Expertise in Frontend and Backend Technologies
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid gap-20 lg:grid-cols-2 items-start">
        <SkillGrid skills={frontendSkills} colors={frontendColors} />
        <SkillGrid skills={backendSkills} colors={backendColors} />
      </div>
    </section>
  );
};

export default SkillSection;
