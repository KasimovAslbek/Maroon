/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/mainBg.png')",
        'banner1': "url('/src/img/banner1.png')",
        'banner2': "url('/src/img/banner2.png')",
      },
      maxWidth: {
        'main': '1366px',
      },

    },
  },
  plugins: [],
}

