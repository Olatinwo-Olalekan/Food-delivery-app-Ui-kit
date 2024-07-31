/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
      'montserrat': ['"Montserrat", sans-seri'],
      'poppins': ['"Poppins", sans-serif']
      },
      backgroundImage: {
        'hero-pattern1': "url('rectangle 48.png')",
        'hero-pattern2': "url('rectangle 47.png')",
      }
    },
    screens: {
      sm: "433px",
      md: "586px",
      x: "1152px",
    },
  },
  plugins: [],
}

