/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      boxShadow: {
        manu: "0 1px 2px rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.07), 0 4px 8px rgba(0,0,0,.07), 0 8px 16px rgba(0,0,0,.07), 0 16px 32px rgba(0,0,0,.07), 0 32px 64px rgba(0,0,0,.07)",
        blueRing: "0 0 0 4px #C2DBFE",
        greenRing: "0 0 0 4px #9DCCB6",
      },
    },
  },
  plugins: [],
};
