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
        'cosmic-navy': '#0D0F26',
        'abyssal-purple': '#1A1233',
        'nebula-magenta': '#590C57',

        // Accent & Action Colors
        'infinity-gold': '#FF9D00',
        'infinity-gold-light': '#FFD700',
        'ultron-cyan': '#00FFFF',
        'ultron-cyan-dark': '#00C3E3',
        'reality-red': '#FF003C',

        // Neutral Colors (Typography & Borders)
        'starlight-white': '#EAEAEA',
        'faded-silver': '#A0A8B8',
        'facet-grey': '#3E4259',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
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
