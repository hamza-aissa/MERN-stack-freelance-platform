/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      primary: "#F71953",
      post: "#1A1D28",
      page: "#161823",
      button: "#232633",
      grey: "#656A7D",
      black: "#131212",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to right, #d2ffff -50%, #0694c6)",
        card: "linear-gradient(to right, #FFFFFF -500%, #14101D)",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255,255,0.35)",
          "0 0px 65px rgba(255,255,255,0.2)",
        ],
      },
      boxShadow: {
        card: "4px 6px 30px 0px #13242E40",
      },
    },
  },
  plugins: [],
};
