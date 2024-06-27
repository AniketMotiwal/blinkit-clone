/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'ipad-mini': '744px',
        'ipad-air': '820px',
      },
      width: {
        '96': '24rem',
      },
      keyframes: {
        textScroll: {
          '0%': { transform: 'translateY(0%)' },
          '10%': { transform: 'translateY(-100%)' },
          '20%': { transform: 'translateY(-200%)' },
          '30%': { transform: 'translateY(-300%)' },
          '40%': { transform: 'translateY(-400%)' },
          '50%': { transform: 'translateY(-500%)' },
          '60%': { transform: 'translateY(-600%)' },
          '70%': { transform: 'translateY(-700%)' },
          '80%': { transform: 'translateY(-800%)' },
          '90%': { transform: 'translateY(-900%)' },
          '100%': { transform: 'translateY(-1000%)' },
        },
      },
      animation: {
        textScroll: 'textScroll 10s linear infinite',
      },
      margin: {
        margin: {
          '112': '28rem',
        },
      },
    },
  },
  plugins: [],
});
