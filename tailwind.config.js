/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 150px 0 rgb(0 0 0 / 0.75);',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}