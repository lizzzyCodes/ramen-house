/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path as necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ["American Typewriter", "serif"], // Add the font here
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat here
      },
      colors: {
        gray: "#858585", // Custom gray color
        burgundy: "#C6322D", // Custom burgundy color
      },
    },
  },
  plugins: [],
};
