/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#111111",
        accent: "#ffffff",
        muted: "#9ca3af",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* 🔥 Premium spacing scale */
      spacing: {
        section: "120px",
      },

      /* 🔥 Better shadows (depth) */
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.6)",
        glow: "0 0 80px rgba(255,255,255,0.08)",
      },

      /* 🔥 Smooth easing */
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};