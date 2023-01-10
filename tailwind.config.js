/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/**/*", "./build/**/*"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
