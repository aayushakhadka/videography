/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // hideNav: { max: "600px" },
      mobileS: { amx: "320px" },
      mobileM: "375px",
      mobileL: "425px",
      mobilexl:'585px',
      tablet: "768px",
      laptop1: "1024px",
      laptop: "1440px",
      xl: "1280px",
    },

    extend: {
      backgroundImage: {
        camera: "url('./images/camera.jpg')",
        image: "url('./images/image.webp')",
      },

      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),

      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      safelist: {
        animation: "animate-[fade-in_1s_ease-in-out]",
      },
    },
  },
  plugins: [],
};
