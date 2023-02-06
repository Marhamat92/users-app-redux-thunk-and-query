/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: 'translate(100%' }
        }
      },
      animation: {},
      colors: {},
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      height: {},
      inset: {},
      letterSpacing: {},
      lineHeight: {},
      margin: {},
      maxHeight: {},
      maxWidth: {},
      minHeight: {},
      minWidth: {},
      opacity: {},
      padding: {},
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",

      },
      spacing: {},
      stroke: {},
      strokeWidth: {},
      textColor: {},
      width: {},
      zIndex: {},
    },
  },
  plugins: [],
}
