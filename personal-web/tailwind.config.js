/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gold: "rgb(var(--gold) / <alpha-value>)",
        gl: "rgb(var(--gl) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        pn: "rgb(var(--pn) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        mute: "rgb(var(--mute) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Bodoni Moda"', "Didot", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
};
