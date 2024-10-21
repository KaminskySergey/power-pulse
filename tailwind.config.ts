import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      customGray: {
        "30": "#E8725E",
      },
      whiteGray: {
        "0": "#EFEDE8",
        "05": "#EFEDE805",
        "20": "#EFEDE820",
        "30": "#EFEDE830",
        "40": "#EFEDE840",
        "50": "#EFEDE850",
        "65": "#EFEDE865",
        "60": "#EFEDE860",
        "80": "#EFEDE880",
      },
      orange: "#E6533C",
      orangeWhite: "#EF8964",
      beige: "#EFA082",
      white: "#FFFFFF",
      whiteDark: "#EFEDE8",
      redError: "#D80027",
      redСircle: "#D80027",
      green: "#3CBF61",
      greenCircle: "#419B09",
      black: "#000000",
      darkGray: "#303030",
      black1: "#111111",
      transparent: "transparent",
      radio: "#797876",
      scroll: "#262625",
      contDiary: "#10100F",
      dropdown: "#1C1C1C",
      dietText: "#1B1B1A",
    },
    screens: {
      sm: { min: "320px", max: "767px" },
      md: "768px",
      lg: { min: "1280px" },
    },
  },
  plugins: [],
};
export default config;
