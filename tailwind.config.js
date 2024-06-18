/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  darkMode: 'class',
  theme: {
    extend: {
     colors : {
      dark : "#18181b"
     }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.blue-btn': {
          '@apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': {},
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

