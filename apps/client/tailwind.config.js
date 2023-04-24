/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: '#011f4b',
      primary: '#03396c',
      secondary: '#005b96',
      main: '#6497b1',
      light: '#b3cde0',
    },
    extend: {},
  },
  plugins: [],
}
