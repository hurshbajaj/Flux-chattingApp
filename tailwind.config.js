/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#90E0EF",
        primary: {
          100: "#0077B6",
          200: "#00B4D8"
        }

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define the 'font-inter' class
      },
      animation: {
        towering:"toweringKey 1.5s ease-out",
        slide:"slideKey 1.5s ease-out"
      },
      keyframes:{
        toweringKey:{
          "0%": {
            transform: "translateY(1000px);",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0);",
            opacity: 1,
          }
        },
        slideKey:{
          "0%": {
            transform: "translateX(-1500px);",
            opacity: 0
          },
          "100%": {
            transform: "translateX(0);",
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [],
}

