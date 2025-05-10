import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

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
import Figma from "../../assets/Img/figma.png"
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
  { name: "Figma", image: Figma}
];

const backendSkills = [
  { name: "Node.js", image: NodeJS },
  { name: "Express.js", image: Express },
  { name: "MongoDB", image: MongoDB },
  { name: "Firebase", image: Firebase },
  { name: "JWT", image: JwtImage },
];

const generateRandomColors = (length) => {
  const getRandomHex = () => {
    const letters = "0123456789ABCDEF";
    return "#" + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("");
  };
  return Array.from({ length }, getRandomHex);
};

const SkillCard = ({ skill, color, innerRef }) => (
  <div
    ref={innerRef}
    className="flex flex-col items-center bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div className="p-6 flex flex-col items-center">
      <img src={skill.image} alt={skill.name} className="w-20 h-20 object-contain mb-3" />
      <p className="text-white text-base font-medium text-center">{skill.name}</p>
    </div>
  </div>
);

const SkillGrid = ({ skills, colors, refs }) => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          skill={skill}
          color={colors[index]}
          innerRef={(el) => (refs.current[index] = el)}
        />
      ))}
    </div>
  </div>
);

const SkillSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const frontendRef = useRef([]);
  const backendRef = useRef([]);

  const frontendColors = useMemo(() => generateRandomColors(frontendSkills.length), []);
  const backendColors = useMemo(() => generateRandomColors(backendSkills.length), []);

  useEffect(() => {
    const animateSkills = () => {
      // Title Animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      const animateGroup = (refs) => {
        refs.current.forEach((el, index) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.2 + index * 0.1, 
              ease: "power3.out",
            }
          );
        });
      };

      animateGroup(frontendRef);
      animateGroup(backendRef);
    };
    animateSkills();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="text-center mb-20" ref={titleRef}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">My Skills</h1>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          My Expertise in Frontend and Backend Technologies
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-20 lg:grid-cols-2 items-start">
        <SkillGrid
          skills={frontendSkills}
          colors={frontendColors}
          refs={frontendRef}
        />
        <SkillGrid
          skills={backendSkills}
          colors={backendColors}
          refs={backendRef}
        />
      </div>
    </section>
  );
};

export default SkillSection;
