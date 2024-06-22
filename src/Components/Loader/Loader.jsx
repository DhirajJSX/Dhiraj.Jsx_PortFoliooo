import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // Import SplitText for animating individual letters
import Particles from "./../Particles/Particles"; // Adjust the import path as needed

const Loader = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText); // Register SplitText plugin

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

    // Add writing animation after loader is finished
    loaderTimeline.eventCallback("onComplete", () => {
      const split = new SplitText(".text", { type: "chars, words" }); // Split text into characters
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.05 // Stagger each letter animation
      });

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
