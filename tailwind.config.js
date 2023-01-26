/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': 'rgb(26, 140, 216)',
        'theme-green': 'rgb(52, 168, 83)',
        'theme-green-b': 'rgba(52, 168, 83, 0.5)',
        'theme-red': 'rgb(234, 67, 53)',
        'theme-coral': 'rgb(229, 89, 119)',
        'theme-yellow': 'rgb(251, 188, 5)',
        'light-black': 'rgba(34,38,40,255)',
        'dark-black': 'rgba(24,29,31,255)',
        'background-main': 'rgb(36, 36, 36)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
