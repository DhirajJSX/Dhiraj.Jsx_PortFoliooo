import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
    { name: 'Java', color: '#ff5733' },
    { name: 'JavaScript', color: '#33ff57' },
    { name: 'React', color: '#5733ff' },
    { name: 'Node.js', color: '#ff3357' },
    { name: 'CSS', color: '#33ffbd' },
    { name: 'Python', color: '#bd33ff' }
];

const SkillSection = () => {
    const sectionRef = useRef(null);
    const skillItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2 }
            );

            gsap.fromTo(
                skillItemsRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
            );

            skillItemsRef.current.forEach((el, index) => {
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
                        scale: 1.05, // Scale up
                        zIndex: 1,
                        duration: 0.5,
                        ease: "power1.out"
                    });
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(el, {
                        rotationY: 10,
                        rotationX: -10,
                        scale: 1, // Reset scale
                        zIndex: 0,
                        duration: 0.5,
                        ease: "power1.out"
                    });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id='skills' className='min-h-screen flex flex-col justify-center items-center bg-radial-gradient'>
            <div className='p-5'>
                <h1 className='text-6xl md:text-6xl font-bold text-center text-white mb-20'>Skills</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='p-8 rounded-lg shadow-md backdrop-blur-lg neon-hover flex flex-col justify-center items-center'
                        style={{ backgroundColor: skill.color }}
                        ref={el => skillItemsRef.current[index] = el}
                    >
                        <h2 className='text-white text-3xl md:text-4xl font-semibold'>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;
