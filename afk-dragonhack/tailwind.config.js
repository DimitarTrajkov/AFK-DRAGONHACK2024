module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1440px" },
      //everything under 1440px width (laptop)

      md: { max: "1280px" },
      //everything under 1280px width (tablet)

      md2: { max: "900px" },

      sm: { max: "744px" },
      //everything under 744px width (mobile)
    },
    extend: {
      colors: {
        primary: "#ff4800",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};