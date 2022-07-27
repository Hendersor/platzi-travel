/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
      white: "#fff",
    },
  },
  plugins: [],
};
