/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #ff7e5f, #feb47b)", // Example gradient colors
      },
      textColor: {
        transparent: "transparent",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 200,
        light: 300,
        normal: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      colors: {
        accentRed: {
          DEFAULT: "#e22823",
          light: "#ef4a46",
          dark: "#a91c1a",
        },
        accentGreen: {
          DEFAULT: "#089a27",
          light: "#27b344",
          dark: "#06791f",
        },
        primary: {
          DEFAULT: "#1c1c1e",
          light: "#383838",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
