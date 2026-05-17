/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#171A20',
          ink: '#252B33',
          teal: '#006B68',
          tealDark: '#004F4D',
          cobalt: '#2457D6',
          steel: '#EEF3F5',
          mist: '#E6F5F3',
          amber: '#CF8B1E',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 26, 32, 0.08)',
        lift: '0 20px 55px rgba(0, 107, 104, 0.16)',
      },
      backgroundImage: {
        'industrial-grid':
          'linear-gradient(rgba(23,26,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(23,26,32,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
