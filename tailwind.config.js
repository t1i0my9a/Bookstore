/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C2E5C', // Regal Quill purple
        secondary: '#C1CFD6', // Vintage paper color
        accent: {
          100: '#E8EDF0', // Lighter shade
          200: '#D4DDE3', // Light shade
          300: '#C1CFD6', // Base vintage paper
          400: '#AEC0C9', // Dark shade
          500: '#9BB2BC', // Darker shade
        },
      },
      fontFamily: {
        'display': ['Trebuchet MS', 'sans-serif'],
        'title': ['Times New Roman', 'serif'],
        'impact': ['Impact', 'sans-serif'],
        'subtitle': ['Comic Sans MS', 'sans-serif'],
        'body': ['Calibri', 'sans-serif'],
        'body-strong': ['Roboto', 'sans-serif'],
        'captions': ['Comfortaa', 'sans-serif'],
      },
      fontSize: {
        'display': ['40px', { lineHeight: '1.2' }],
        'title-large': ['30px', { lineHeight: '1.2' }],
        'title': ['25px', { lineHeight: '1.2' }],
        'subtitle': ['15px', { lineHeight: '1.4' }],
        'body-large': ['20px', { lineHeight: '1.5' }],
        'body-strong': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'captions': ['11px', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};