import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(".cube", {
        y: -20,
        scale: 1.5,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut"
      })
      .to(".cube", {
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut"
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-purple">
      <div className="flex space-x-4">
        <div className="cube bg-white w-10 h-10"></div>
        <div className="cube bg-white w-10 h-10"></div>
        <div className="cube bg-white w-10 h-10"></div>
      </div>
    </div>
  );
};

export default Loader;