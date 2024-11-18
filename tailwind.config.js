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
        bodyColor: "#EEF5FF",
        lightText: "#222831",
        boxBg: "linear-gradient(145deg, #55AD9B, #95D2B3)",
        designColor: "#55AD9B",
        titleColor: "#222831",
      },
      boxShadow: {
        shadowOne: "5px 5px 10px #C0D6E8, -5px -5px 10px #C0D6E8",
      },
      backgroundImage: {
        hero: "url('../public/back_image2.png')",
      },
    },
  },
  plugins: [],
};