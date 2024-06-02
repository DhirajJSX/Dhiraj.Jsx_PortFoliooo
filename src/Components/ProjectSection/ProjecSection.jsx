import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectSection.css';
import ProjectOneImage from './../../assets/Img/aaaaaaaaaaaa.jpg';
import ProjectTwoImage from './../../assets/Img/aaaaaaaaaaaa.jpg';
import ProjectThreeImage from './../../assets/Img/aaaaaaaaaaaa.jpg';

const ProjectSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('project-section');
            const offsetTop = aboutSection.offsetTop;
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
            image: ProjectOneImage // Use imported image for Project One
        },
        {
            title: "Project Two",
            description: "This is a brief description of Project Two. It focuses on solving problem A using tool B.",
            link: "https://github.com/yourusername/project-two",
            image: ProjectTwoImage // Use imported image for Project Two
        },
        {
            title: "Project Three",
            description: "This is a brief description of Project Three. It is a collaborative project that implements feature C.",
            link: "https://github.com/yourusername/project-three",
            image: ProjectThreeImage // Use imported image for Project Three
        }
    ];

    return (
        <div id="project-section" className="project-section">
            <h1>Projects</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
