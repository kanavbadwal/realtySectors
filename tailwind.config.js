/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        fadeIn: "fadeIn 1s ease-out forwards 1s",
        slideUp: "slideUp 1s ease-out forwards",
        slideUpModal: "slideUpModal 0.3s ease-out",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0%)" },
          "20%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(-25%)" },
          "45%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "70%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-75%)" },
          "95%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUpModal: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
