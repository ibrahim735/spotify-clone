/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#262626',
        spotifyGreen: '#2BDD6A',
        spotifyGreenHover: '#4DE085',
      }
    },
  },
  plugins: [],
}

