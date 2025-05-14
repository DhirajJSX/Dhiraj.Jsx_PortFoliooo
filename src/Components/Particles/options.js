const options = {
  autoPlay: true,
  background: {
    opacity: 1,
  },
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 144,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 900,
      },
    },
    color: {
      value: "#ffffff", // White color for stars
    },
    shape: {
      type: "circle", // Star-shaped particles
      stroke: {
        width: 0,
        color: "#ffffff", // White stroke for stars (optional)
      },
    },
    size: {
      value: { min: 1, max: 3.5 }, // Star size range
      animation: {
        enable: true,
        speed: 10, // Faster animations for star movement
        sync: true,
      },
    },
    opacity: {
      value: { min: 0.5, max: 0.8 },
      animation: {
        enable: true, 
        speed: 10,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.9, // Faster movement for space effect
      direction: "none", // Random movement direction
      outModes: {
        default: "out",
      },
    },
    links: {
      enable: false,
    },
    rotate: {
      random: true, // Random rotation for stars
      value: 45, // Slight rotation angle
    },
    tilt: {
      random: true, // Random tilt for a more dynamic effect
      value: 10, // Tilt value for rotation effect
    },
    shadow: {
      enable: false, // No shadow effect
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
};

export default options;
