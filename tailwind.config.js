/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E83F2',
      },
      boxShadow: {
        custom:
          '0 4px 1px -2px rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 8px 0 rgba(0, 0, 0, 0.1)',
        custom2: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
      },
      backgroundImage: {
        'gradient-video':
          'linear-gradient(to top,rgba(0,0,0,.4) 0,rgba(0,0,0,0) 160px),linear-gradient(to bottom,rgba(0,0,0,.4) 0,rgba(0,0,0,0) 96px)',
      },
      height: {
        custom: 'calc(100% - 60px)',
      },
    },
  },
  plugins: [],
};
