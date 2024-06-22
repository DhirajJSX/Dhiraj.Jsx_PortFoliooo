import { useEffect } from 'react';
import { gsap } from 'gsap';
import Particles from "./../Particles/Particles"; // Adjust the import path as needed

const Loader = () => {
  useEffect(() => {
    const loaderTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(".text", {
        opacity: 0.5,
        scale: 1.2,
        duration: 0.5,
        ease: "power1.inOut"
      })
      .to(".text", {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut"
      });

    // Add slide up animation after loader is finished
    loaderTimeline.eventCallback("onComplete", () => {
      gsap.to(".loader-container", {
        y: "-100%",
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".loader-container").style.display = "none";
        }
      });
    });

  }, []);

  return (
    <div className="loader-container relative flex flex-col items-center justify-center h-screen bg-white">
      <Particles />
      <h1 className="text-black text-4xl font-cursive font-bold relative z-10">Welcome to portfolioooo</h1>
    </div>
  );
};

export default Loader;
