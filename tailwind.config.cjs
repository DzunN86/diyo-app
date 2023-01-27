/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#FC3B00",
        secondary: "#FF3074",
      },
      boxShadow: {
        s1: "0px 9.9px 21.6px rgba(1, 71, 255, 0.41)",
        s2: "2px 12px 20px 0px rgba(90, 117, 167, 0.17)",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
