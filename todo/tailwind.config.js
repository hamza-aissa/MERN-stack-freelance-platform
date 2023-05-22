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
    },

    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to right, #d2ffff -50%, #0694c6)",
      },
    },
  },
  plugins: [],
};
