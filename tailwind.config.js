/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'map': "url('/src/assets/map.png')",
      },
      colors: {
        "app-bg": "#e5e7eb",
        "app-green": "#2ac420",
        "light-gray": "#F3F4F6",
        "dark-gray": "#17181A",
        "app-pink" : "#EE386A",
        "app-orange": "#F37253",
        'app-purple': "#3D006A"
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'lato': ["Lato", "sans-serif"],
        
      },
      spacing: {
        '-19.25': '-77px',
        '-21.75': '-87px',
        '-23': '-92px',
        '-25.25': '-101px',
        '-43': '-172px',
      },
    },
  },
  plugins: [],
};