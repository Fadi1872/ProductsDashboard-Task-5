/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      colors: {
        "orange-450": "rgba(254, 175, 0, 1)",
        "yellow-450": "rgba(248, 212, 66, 1)",
        "gray-450": "rgba(242, 234, 225, 1)",
        "white-50": "rgba(253, 253, 253, 1)",
        "white-transparent": "rgba(242, 234, 225, 0.7)",
        "black-transparent": "rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        100: "30rem",
        71: "270px",
        "2.3/10": "22%",
        "0.4/10": "4%"
      },
      fontSize: {
        "2.5xl": ["22px", "26.82px"],
      },
      fontFamily: {
        sans: ['"Montserrat"'],
      },
      translate: {
        "0/1": "0%",
      },
      zIndex: {
        10000: 10000
      }
    },
  },
  plugins: [],
};
