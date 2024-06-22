import { useEffect } from 'react';
import { gsap } from 'gsap';
import Particles from "./../Particles/Particles";
import "./spinner.css";

const Loader = () => {
  useEffect(() => {
    const loaderTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(".loader-icon", {
        rotation: 360,
        duration: 1.5,
        ease: "power2.inOut",
        transformOrigin: "center"
      });

    loaderTimeline.eventCallback("onComplete", () => {
      gsap.to(".loader-container", {
        y: "-100%",
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".loader-container").style.display = "none";
          
          gsap.from(".loader-content > *", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power1.inOut",
            stagger: 0.2
          });
        }
      });
    });
  }, []);

  return (
    <div className="loader-container flex items-center justify-center min-h-screen bg-radial-gradient">
      <div className="loader-content text-center">
      
      </div>
      <Particles />
    </div>
  );
};

export default Loader;
