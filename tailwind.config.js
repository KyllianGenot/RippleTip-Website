import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backdropBlur: {
        '4xl': '40px', // Flou très intense
      },
    },
  },
  plugins: [
    typography
  ],
};