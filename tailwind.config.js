
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#002060',
        secondary: '#FFC759',
        alternative: '#066906',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0, 32, 96, 0.9), rgba(0, 32, 96, 0.7)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')",
        'cta-pattern': "linear-gradient(to right, rgba(0, 32, 96, 0.95), rgba(0, 32, 96, 0.85)), url('https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}
