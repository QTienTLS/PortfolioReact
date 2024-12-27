/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'default': '#2abd51',
          '50': '#f1fcf3',
          '100': '#defae4',
          '200': '#bef4cb',
          '300': '#8beaa3',
          '400': '#51d774',
          '500': '#2abd51',
          '600': '#1d9c3f',
          '700': '#1a7b34',
          '800': '#1a612e',
          '900': '#175028',
          '950': '#072c12',
      },
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}