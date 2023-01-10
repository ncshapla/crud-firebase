/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html", "./build/**/*"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
