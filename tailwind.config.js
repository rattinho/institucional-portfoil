/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
      },
      colors: {
        'azul-claro': '#2A8E9E',
        branco: '#E9F3F4',
        preto: '#033246',
        preto2: '#0a4a63',
      },
      height: {
        screen: 'calc(100vh - var(--menu-heigh))',
      },
    },
  },
  plugins: [],
};
