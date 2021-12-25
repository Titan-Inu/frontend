module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#1085D9',
        }
      },
      height: {
        'wave': '42rem',
        'shiba': '40rem',
      },
      
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}