/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#0be88f',
        bgColor: '#111111'
      },
    },
  },
  plugins: [],
}
