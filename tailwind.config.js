module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
  plugins: [require('tailwind-scrollbar-hide')],
  // plugins: [require('tailwind-scrollbar')],
}
