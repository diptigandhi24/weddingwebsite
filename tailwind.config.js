/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-banner": "url('/image/mobile_landing.png')",

        sitebg: "url('/image/sitebg.jpg')",
      },
      colors: {
        menu: "#8DD5E4",
        "wedding-pink": "#DD6589",
      },
      fontFamily: {
        abhy: ["var(--font-weddingFont)"],
        avenir: ["var(--font-avenir)"],
      },
    },
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "1300px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
