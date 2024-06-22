import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import JavaImg from './../../assets/Img/java.png';
import Html from './../../assets/Img/Html.png';
import Css from './../../assets/Img/Css.png';
import Sass from './../../assets/Img/Sass.png';
import Tailwind from './../../assets/Img/Tailwind.png';
import Javascript from './../../assets/Img/JavaScript.png';
import ReactImg from './../../assets/Img/React.png';
import Git from './../../assets/Img/git.png';
import Github from './../../assets/Img/Github.png';

const skills = [
    { name: 'Java', image: JavaImg },
    { name: 'Html', image: Html },
    { name: 'Css', image: Css },
    { name: 'Sass', image: Sass },
    { name: 'Tailwindcss', image: Tailwind },
    { name: 'JavaScript', image: Javascript },
    { name: 'React.js', image: ReactImg },
    { name: 'Git', image: Git },
    { name: 'GitHub', image: Github },
];

const hoverStyles = `
    .neon-hover {
        transition: background-color 0.3s ease-in-out;
    }

    .neon-hover:hover {
        background-color: black;
    }

    .neon-hover:hover h2 {
        color: white;
        transition: color 0.3s ease-in-out;
    }
`;

const SkillSection = () => {

    const sectionRef = useRef(null);
    const skillItemsRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        
        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight) {
                animateSkills();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animateSkills = () => {
        gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0 },
            { opacity: 1, duration: 2, ease: "power4.out" }
        );

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" }
        );

        
        skillItemsRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 + (index * 0.1), ease: "power4.out" }
            );

            gsap.to(el, {
                rotationY: 10,
                rotationX: -10,
                ease: "power1.out",
                paused: true,
            });

            if (!('ontouchstart' in window)) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(el, {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1.05,
                        zIndex: 1,
                        duration: 0.5,
                        ease: "power4.out"
                    });
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(el, {
                        rotationY: 10,
                        rotationX: -10,
                        scale: 1,
                        zIndex: 0,
                        duration: 0.5,
                        ease: "power4.out"
                    });
                });
            }
        });
    };


    
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    return (
        <>
            <style>{hoverStyles}</style>
            <section id='skills' className='min-h-screen flex flex-col justify-center items-center bg-radial-gradient py-20 px-10' ref={sectionRef}>
                <div className='p-5' ref={titleRef}>
                    <h1 className='text-4xl md:text-6xl font-bold text-center text-white mb-10 md:mb-20'>Skills</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
                    {skills.map((skill, index) => (
                        <div key={index} className='p-6 md:p-8 rounded-lg drop-shadow-xl cursor-pointer neon-hover flex flex-col justify-center items-center transition-all  duration-500 ' ref={el => skillItemsRef.current[index] = el} style={{ backgroundColor: getRandomColor() }}>
                            <img src={skill.image} alt="" className=' w-32 mb-4  drop-shadow-lg' />
                            <h2 className='text-lg md:text-4xl font-semibold drop-shadow-2xl font-Josefin text-white '>{skill.name}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SkillSection;
