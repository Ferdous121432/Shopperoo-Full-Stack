/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"], // 12px, 16px
      sm: ["0.875rem", "1.25rem"], // 14px, 20px
      base: ["1rem", "1.21875rem"], // 16px, 19.5px
      lg: ["1.125rem", "1.37125rem"], // 18px, 21.94px
      xl: ["1.25rem", "1.52375rem"], // 20px, 24.38px
      "2xl": ["1.5rem", "1.82875rem"], // 24px, 29.26px
      "3xl": ["1.75rem", "3.125rem"], // 28px, 50px
      "4xl": ["3rem", "3.625rem"], // 48px, 58px
      "8xl": ["6rem", "7rem"], // 6rem, 7rem
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        transparent: "transparent",
        current: "currentColor",
        black: require("tailwindcss/colors").black,
        white: require("tailwindcss/colors").white,
        emerald: require("tailwindcss/colors").emerald,
        indigo: require("tailwindcss/colors").indigo,
        yellow: require("tailwindcss/colors").yellow,
        stone: require("tailwindcss/colors").warmGray,
        sky: require("tailwindcss/colors").lightBlue,
        neutral: require("tailwindcss/colors").trueGray,
        gray: require("tailwindcss/colors").gray,
        slate: require("tailwindcss/colors").slate,
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "90rem", // 1440px
        "max-xs": { max: "20rem" }, // 320px
        "max-sm": { max: "30rem" }, // 480px
        "max-md": { max: "48rem" }, // 768px
        "max-lg": { max: "64rem" }, // 1024px
        "max-xl": { max: "80rem" }, // 1280px
        "max-2xl": { max: "96rem" }, // 1536px
        "max-3xl": { max: "102rem" }, // 1632px
      },
    },
  },
  plugins: [],
});
