const options = {
  autoPlay: true,
  background: {
    opacity: 0,
    color: {
      value: "#000000", // Black background for space theme
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -10,
  },
  detectRetina: true,
  fpsLimit: 120,
  particles: {
    number: {
      value: 200, // Increase the number of particles for a starry effect
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
    },
    color: {
      value: "#ffffff", // White stars
    },
    shape: {
      type: "circle", // Circle shape for dot stars
    },
    size: {
      value: {
        min: 1,
        max: 3, // Smaller stars for a more subtle effect
      },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
        mode: "random",
      },
    },
    move: {
      enable: true,
      speed: 0.5, // Slow movement to simulate a distant starfield
      direction: "none",
      random: true, // Randomize movement direction
      outModes: {
        default: "out", // Particles will disappear when they reach the edges
      },
    },
    opacity: {
      value: {
        min: 0.2,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    life: {
      duration: {
        value: 5, // Particles will live for 5 seconds
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: false,
  zLayers: 100,
  name: "Space Starfield",
};

export default options;
