/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 45px rgba(255, 255, 255, 0.18)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        night: "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 28%), linear-gradient(180deg, #050508 0%, #090a0f 42%, #07070c 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-16px) scale(1.02)" },
        },
        pulseHeart: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseHeart: "pulseHeart 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
