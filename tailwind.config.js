/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      animation: {
        grid: "grid 20s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      // You can add more theme extensions here if needed
      backgroundColor: {
        // Add custom background colors for light and dark modes if needed
        // 'light-primary': '#ffffff',
        // 'dark-primary': '#000000',
      },
      textColor: {
        // Add custom text colors for light and dark modes if needed
        // 'light-primary': '#000000',
        // 'dark-primary': '#ffffff',
      },
    },
  },
  plugins: [],
};