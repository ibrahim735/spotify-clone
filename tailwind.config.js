/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstGradient: "hsl(0,0%,15%)",
        secondGradient: "hsl(0,0%,2%)",
        customGray: '#a8a29e',
        spotifyGreen: '#1ed760',
        spotifyGreenHover: '#4DE085',
      }
    },
  },
  plugins: [],
}

