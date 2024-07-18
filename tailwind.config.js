/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0C1B1B",
        TwoColor: "#1E4444",
        ThreeColor: "#306D6D",
        FourColor: "#429595",
        customGreen: "#11978B",
        gradGreen: "#439188",
        gradBlack: "#031312",
        iconColor: "#FFCF51",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};

