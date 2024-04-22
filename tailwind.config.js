/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'PrimarySoftBlue': 'hsl(231, 69%, 60%)',
        'PrimarySoftRed': 'hsl(0, 94%, 66%)',
        'GrayishBlue': 'hsl(229, 8%, 60%)',
        'VeryDarkBlue': 'hsl(229, 31%, 21%)'
      }
    },
  },
  plugins: [],
}

