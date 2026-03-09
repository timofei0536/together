/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lg': '1023px',
      'md': '768px',
    },
    extend: {
      keyframes: {
        "automate-border-grow": {
          from: { height: "0" },
          to: { height: "100%" },
        },
      },
      animation: {
        "automate-border-grow": "automate-border-grow 5s linear forwards",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, #021720 0%, rgba(2, 23, 32, 0) 35%), linear-gradient(0deg, #021720 0%, rgba(2, 23, 32, 0) 50%), radial-gradient(ellipse 55% 50% at 42.5% 25%, rgba(2, 23, 32, 0) 10%, rgba(2, 23, 32, 0.2) 25%, rgba(2, 23, 32, 0.5) 35%, #021720 100%)",
        "footer-overlay":
          "linear-gradient(90deg, #021720 0%, #021720 30%, rgba(2, 23, 32, 0.92) 45%, rgba(2, 23, 32, 0.6) 60%, rgba(2, 23, 32, 0.5) 72%, rgba(2, 23, 32, 0.75) 85%, #021720 100%)",
        "footer-video-overlay":
          "linear-gradient(270deg, color-mix(in srgb, var(--dark) 40%, transparent) 10%, color-mix(in srgb, var(--dark) 15%, transparent) 25%, transparent 55%), linear-gradient(90deg, var(--dark) 12.5%, var(--dark) 1%, transparent 45%), linear-gradient(180deg, var(--dark) 0%, transparent 35%), linear-gradient(0deg, var(--dark) 0%, transparent 20%), radial-gradient(ellipse 80% 65% at 55% 10%, transparent 15%, color-mix(in srgb, var(--dark) 50%, transparent) 35%, var(--dark) 100%)",
      },
      borderRadius: {
        4: "4px",
      },
      colors: {
        brand: "#4945FF",
        dark: {
          DEFAULT: "#021720",
          10: "rgba(2, 23, 32, 0.1)",
          45: "rgba(2, 23, 32, 0.45)",
          60: "rgba(2, 23, 32, 0.6)",
          80: "rgba(2, 23, 32, 0.8)",
        },
        white: {
          DEFAULT: "#fff",
          10: "rgba(255,255,255, 0.1)",
          60: "rgba(255, 255, 255, 0.6)",
          80: "rgba(255,255,255, 0.8)",
        },
        gray: {
          light: "#DCDDD7",
          dark: "#B3B9BC",
        },
      },
      spacing: {
        sm: "8rem",
        md: "9.6rem",
        lg: "12.8rem",
        xl: "14.4rem",
        xxl: "16.4rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        40: "4rem",
        48: "4.8rem",
        56: "5.6rem",
        68: "6.8rem",
      },

      fontSize: {
        'h1': ['9.6rem', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '300', fontFamily: 'var(--secondary-f)' }],
        'h2': ['4.8rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300', fontFamily: 'var(--secondary-f)' }],
        'h2-lg': ['5.6rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300', fontFamily: 'var(--secondary-f)' }],
        'lg': ['1.8rem', { lineHeight: '1.5' }],
        'md': ['1.6rem', { lineHeight: '1.5' }],
        'md-lg': ['1.8rem', { lineHeight: '1.5', letterSpacing: '-0.015em', fontWeight: '400' }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-h1": { fontFamily: "var(--secondary-f)", },
        ".text-h2": { fontFamily: "var(--secondary-f)", },
        ".text-h2-lg": { fontFamily: "var(--secondary-f)", },
      });
    },
    function ({ addComponents }) {
      addComponents({
        ".reviews": {
          backgroundColor: "white",
          position: "relative",
          zIndex: "2",
        },
        ".hero__title-inner": {
          position: "relative",
          display: "block",
        },
        ".hero__title-slide": {
          display: "block",
          opacity: "0",
          position: "absolute",
          top: "0",
          left: "0",
          pointerEvents: "none",
        },
        ".hero__title-slide--active": {
          opacity: "1",
          position: "relative",
          pointerEvents: "auto",
        },
        ".hero__logos .hero__logo-cell.line-border::before, .hero__logos .hero__logo-cell.line-border::after":
          {
            opacity: "0",
            transition: "opacity 0.4s ease-out",
          },
        ".hero__logos.hero__logos--borders-drawn .hero__logo-cell.line-border::before, .hero__logos.hero__logos--borders-drawn .hero__logo-cell.line-border::after":
          {
            opacity: "1",
          },
      });
    },
  ],
};
