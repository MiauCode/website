/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#F1F8E8",
        lightText: "#222831",
        boxBg: "linear-gradient(145deg, #55AD9B, #95D2B3)",
        designColor: "#55AD9B",
        titleColor: "#222831",
      },
      boxShadow: {
        shadowOne: "5px 5px 19px #D8EFD3, -5px -5px 19px #D8EFD3",
      },
    },
  },
  plugins: [],
};
