/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal:{
          100: "#282823"
        },
        ebony: {
          100: "#595C56"
        },
        sunray: {
          100: "#E9BE5F"
        },
        blond: {
          100: "#F5E8B6"
        }
      }
    },
  },
  plugins: [],
}

