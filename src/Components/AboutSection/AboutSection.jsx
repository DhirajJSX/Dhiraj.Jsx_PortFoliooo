import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-radial-gradient text-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">About Me</h1>
        <p className="sm:text-xl md:text-2xl max-w-2xl font-Caveat shadow-xl p-6 rounded-[30px] bg-slate-900">
          Hey, I'm Dhiraj Bhawsar, a passionate developer with a knack for creating stunning web experiences. My journey in the tech world has been driven by curiosity and a constant desire to learn and innovate. From developing sleek user interfaces to architecting robust backend systems, I love every aspect of software development. Let's dive deeper into my story and explore what drives me to code.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
