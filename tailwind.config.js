/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Colors (Backgrounds & Base)
        'midnight-indigo': '#120E26',
        'amethyst': '#2A1B3D',
        'magenta': '#590C57',

        // Accent & Action Colors
        'amber': '#F5A623',
        'gold': '#FFD700',
        'cyan': '#00F0FF',
        'cyan-dark': '#00C3E3',
        'red': '#FF003C',

        // Neutral Colors (Typography & Borders)
        'white': '#EAEAEA',
        'silver': '#A0A8B8',
        'grey': '#3E4259',
      },
      fontFamily: {
        heading: ['Teko', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px', // Sharp corners by default
      },
    },
  },
  plugins: [],
}
