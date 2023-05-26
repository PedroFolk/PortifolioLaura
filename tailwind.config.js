/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mauaRed: "#840000",
        mauaBlue: "#004684",
        mauaBrown: "#F0C178",
        mauaLightBrown: "#F7E0BB",
        mauaButtonDefault: "#B25A4B",
        mauaYelllowButton: "#FBB74C",
      },
      height: {
        '100': '500px',
        '400': '400px',
        '200': '200px',
      },
      width: {
        '400': '400px',
        '200': '200px',
      }
    },
  },
  plugins: [],
}