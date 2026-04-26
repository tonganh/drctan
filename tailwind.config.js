/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          navy: {
            800: '#1a2744',
            950: '#0d1526',
          },
          accent: {
            400: '#f97316',
            500: '#ea6c0a',
          },
        },
      },
    },
    plugins: [],
  };
  