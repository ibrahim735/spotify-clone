/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#818181',
        spotifyGreen: '#1DB954',
        spotifyGreenHover: '#2BDD6A'
      }
    },
  },
  plugins: [],
}

