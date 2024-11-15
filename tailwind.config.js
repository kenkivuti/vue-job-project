/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

