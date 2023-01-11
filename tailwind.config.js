/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layouts/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      // https://tailwindcss.com/docs/screens
      sm: '480px', // 640px
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        dark: '#282828',
        gray: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
