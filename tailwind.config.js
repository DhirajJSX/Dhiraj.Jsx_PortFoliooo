/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1a1a2e",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        Bebasneue: ["Bebas Neue", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
        Kushan: ["Kaushan Script", "cursive"],
        Kalam: ["Kalam", "cursive"],
        Caveat: ["Caveat", "cursive"],
        FIra: ["Fira Code", "monospace"],
        signature: ['"Great Vibes"', "cursive"],
        cursive: ['"Playwrite US Trad", cursive;']
      },
    },
  },
  plugins: [],
};
