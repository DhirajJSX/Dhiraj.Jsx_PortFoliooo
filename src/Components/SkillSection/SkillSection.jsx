import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import JavaImg from  './../../assets/Img/java.png'

const skills = [
    { name: 'Java',  },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'CSS' },
    { name: 'Python' }
];

const SkillSection = () => {
    const sectionRef = useRef(null);
    const skillItemsRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(section);
                }
            });
        }, options);

        observer.observe(section);

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    const animateSkills = () => {
        gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0 },
            { opacity: 1, duration: 2 }
        );

        gsap.fromTo(
            skillItemsRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
        );

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );

        skillItemsRef.current.forEach((el) => {
            gsap.to(el, {
                rotationY: 10,
                rotationX: -10,
                ease: "power1.out",
                paused: true
            });

            el.addEventListener("mouseenter", () => {
                gsap.to(el, {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1.05,
                    zIndex: 1,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });

            el.addEventListener("mouseleave", () => {
                gsap.to(el, {
                    rotationY: 10,
                    rotationX: -10,
                    scale: 1, 
                    zIndex: 0,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });
        });
    };

    return (
        <section id='skills' className='min-h-screen flex flex-col justify-center items-center bg-radial-gradient py-20 px-10' ref={sectionRef}>
            <div className='p-5' ref={titleRef}>
                <h1 className='text-4xl md:text-6xl font-bold text-center text-white mb-10 md:mb-20'>Skills</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
                {skills.map((skill, index) => (
                    <div key={index} className='p-6 md:p-8 rounded-lg shadow-lg bg-slate-300 neon-hover flex flex-col justify-center items-center' ref={el => skillItemsRef.current[index] = el}>
                        <h2 className='text-lg md:text-3xl font-semibold text-black font-Josefin'>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;
