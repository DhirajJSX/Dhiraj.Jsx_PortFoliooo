import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectOneImage from './../../assets/Img/aaaaaaaaaaaa.jpg';
import ProjectTwoImage from './../../assets/Img/aaaaaaaaaaaa.jpg';
import ProjectThreeImage from './../../assets/Img/aaaaaaaaaaaa.jpg';

const ProjectSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectSection = document.getElementById('project-section');
            const offsetTop = projectSection.offsetTop;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > offsetTop - window.innerHeight / 2) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projects = [
        {
            title: "Project One",
            description: "This is a brief description of Project One. It involves using technology X and Y to achieve Z.",
            link: "https://github.com/yourusername/project-one",
            image: ProjectOneImage,
            goLive : "https://github.com/yourusername/project-one"
        },
        {
            title: "Project Two",
            description: "This is a brief description of Project Two. It focuses on solving problem A using tool B.",
            link: "https://github.com/yourusername/project-two",
            image: ProjectTwoImage,
            goLive : "https://github.com/yourusername/project-one"
        },
        {
            title: "Project Three",
            description: "This is a brief description of Project Three. It is a collaborative project that implements feature C.",
            link: "https://github.com/yourusername/project-three",
            image: ProjectThreeImage,
            goLive : "https://github.com/yourusername/project-one"
        }
    ];

    return (
        <div id="project-section" className="py-16 px-5 text-center bg-radial-gradient from-gray-200 to-gray-300">
            <h1 className="text-white text-4xl mb-10 mt-10 font-bold">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white border cursor-pointer border-gray-300 rounded-lg m-4 p-5 w-80 shadow-md transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full mb-5 rounded-md"
                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        />
                        <h2 className="text-xl mb-4 text-blue-500">{project.title}</h2>
                        <p className="text-gray-600 mb-5">{project.description}</p>
                        <div className="flex justify-center items-center space-x-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold transition-colors duration-300">
                                <motion.button
                                    className="bg-blue-500 text-white px-6 py-3 rounded-xl m-1 shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    GitHub
                                </motion.button>
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold transition-colors duration-300">
                                <motion.button
                                    className="bg-red-500 text-white px-6 py-3 rounded-xl m-1 shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Go Live
                                </motion.button>
                            </a>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
