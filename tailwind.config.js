/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        Bebasneue:["Bebas Neue", "sans-serif"],
        Pacifico:["Pacifico", "cursive"],
        Kushan:["Kaushan Script", "cursive"],
        Kalam:["Kalam", "cursive"],
        Caveat:[ "Caveat", "cursive"]
      },
    },
  },
  plugins: [],
}
