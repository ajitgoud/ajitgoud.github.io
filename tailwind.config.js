/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],

        poppins: ["Poppins", "sans-serif"],

        raleway: ["Raleway", "sans-serif"],
      },

      colors: {
        "app-green": "#14b8a6",
        "app-dark": "#101010",
        "app-light-blue": "#0057FF",
        "app-blue": "#0500FF",
        "app-snow": {
          100: "#BDD4FF",
          500: "#88A2FF",
        },
        "app-l1": "#0F0F2B",
        "app-l2": "#10192A",
        
      },
    },
  },
  plugins: [],
};
