module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#ADDDFF",
          400: '#1085D9',
        }
      },
      height: {
        'wave': '32rem',
        'shiba': '46rem',
      },
      
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}