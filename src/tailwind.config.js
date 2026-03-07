/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E3A8A',
          secondary: '#3B82F6',
          cta: '#CA8A04',
          background: '#F8FAFC',
          text: '#1E40AF',
          navy: '#0A1628',
          gold: '#D4AF37',
          cream: '#FAF8F3',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}