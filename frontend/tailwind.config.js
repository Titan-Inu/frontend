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
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}