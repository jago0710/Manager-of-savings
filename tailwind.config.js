/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'app': "url('../public/background.svg')",
      },
      gridAutoColumns: {
        '80/20': "80%, 20%"
      }
    },
  },
  plugins: [],
}

