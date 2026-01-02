/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0B0F1A",
        bgSecondary: "#111827",
        glass: "rgba(255,255,255,0.06)",
        glassBorder: "rgba(255,255,255,0.12)",
        aiPrimary: "#6366F1",
        aiSecondary: "#22D3EE",
        success: "#4ADE80",
        warning: "#FACC15",
        error: "#F87171",
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.35)",
        soft: "0 20px 50px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "12px",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}