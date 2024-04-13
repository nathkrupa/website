module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_66": "#00000066" },
        white: { A700: "#ffffff" },
        gray: { 50: "#fff9f9", 100: "#f5f5f5" },
      },
      boxShadow: {
        xs: "10px 10px 24px 0px #000000",
        sm: "7px 2px 46px 0px #000000",
        md: "0px 4px 200px 0px #e8f9f7",
        lg: "8px 7px 45px 0px #000000",
      },
      fontFamily: { notoserif: "Noto Serif", nexabold: "Nexa-Bold", nexaregular: "NexaRegular" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #00000000,#2a2a2aa5)",
        gradient1: "linear-gradient(180deg, #dfddf7,#dfddf700)",
        gradient2: "linear-gradient(180deg, #00000000,#000000cc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
