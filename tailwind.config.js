/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ms: "320px",

      mm: "375px",

      ml: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        JWC: {
          // primary: "#a2cbcc",
          // secondary: "#f78f6a",
          // tertiary: "#387184",

          //font colors:
          // black: "#202929",
          // black75: "#585f5f",
          // black50: "#909494",
          // black25: "#c7c9c9",
          // black15: "#dedfdf",
          // logo: "#3c4343",
          // white: "#fdfdfd",
          // white10: "#f6fafa",
          // white15: "#f1f7f8",

          // primary: "#FA9A85",
          // secondary: "#FAF29D",
          // tertiary: "#9978FA",
          // accent: "#6BFAC6",

          // black: "#171515",
          // black85: "#3a3838",
          // black75: "#515050",
          // black50: "#8c8b8b",
          // black25: "#c5c4c4",
          // white: "#fefcfb",
          // white10: "#fff5f3",
          // white15: "#fef0ed",
          // white20: "#feebe7",
          // white25: "#fde5e0",
          // backgroundBlack: "#19211E",

          primary: "#61dedb",

          secondary: "#de78c6",

          tertiary: "#dec54b",

          black: "#131515",
          black85: "#323838",
          black75: "#475353",
          black50: "#718786",
          black25: "#aec7c6",
          white: "#fafefe",
          white10: "#f0fcfc",
          white15: "#e8fafa",
          white20: "#dff8f8",
          white25: "#d7f6f6",
          backgroundBlack: "#19211E",
        },
      },
      fontSize: {
        h1: "4.209rem",
        h2: "3.157rem",
        h3: "2.369rem",
        h4: "1.777rem",
        h5: "1.333rem",
        h6: "1rem",
        p: "1rem",
        p0: "0.75rem",
        small: "0.563rem",
        mini: "0.422rem",
        "4xl": "2.25rem",
        "3xl": "1.875rem",
        "2xl": "1.5rem",
        xl: "1.25rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      lineHeight: {
        h1: "1.2em",
        h2: "1.2em",
        h3: "1.2em",
        h4: "1.2em",
        h5: "1.2em",
        h6: "1.2em",
        p: "1.5em",
        p0: "1.5em",
        small: "1.5em",
        mini: "1.5em",
        "4xl": "2.75rem",
        "3xl": "2.5rem",
        "2xl": "2.25rem",
        xl: "1.75rem",
        lg: "1.5rem",
        base: "1.375rem",
        sm: "1.25rem",
        xs: "1.125rem",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      keyframes: {
        buttonHover: {
          "0%": { color: "#C9FEF5" },
          "50%": { color: "#22555C" },
          "100%": { color: "#C9FEF5" },
        },
        waveSlideLeft: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        waveSlideRight: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideRight: {
          "0%": { translate: "-100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        slideLeft: {
          "0%": { translate: "100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        slideInRight: {
          "0%": { translate: "-100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "-0%", opacity: "100%", display: "block" },
        },
        slideInLeft: {
          "0%": { translate: "100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "0%", opacity: "100%", display: "block" },
        },
        slideOutRight: {
          "0%": { translate: "-0%", opacity: "100%", display: "hidden" },
          "100%": { translate: "-100%", opacity: "0%" },
        },
        slideOutLeft: {
          "0%": { translate: "0%", opacity: "100%", display: "hidden" },
          "100%": { translate: "50%", opacity: "0%", display: "block" },
        },
      },
      animation: {
        waveSlideLeft: "waveSlideLeft ease-in 16s alternate infinite",
        waveSlideRight: "waveSlideRight ease-in 15s 1s alternate infinite",
        ButtonHover: "buttonHover ease-in 1.5s infinite",
        ModalSlideIn: "slideRight ease 0.3s",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 3s ease-in-out infinite alternate",
        SlideInFromLeft: "slideLeft 0.5s ease-in-out",
        SlideInFromRight: "slideInRight 0.5s 1s ease-in-out backwards",
        ThemeSwitchSlideIn: "slideInRight 0.5s ease-in-out backwards",
        ThemeSwitchSlideOut: "slideOutRight 0.5s ease-in-out forwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 0.3s ease-in-out",
        PageAppearRight: "slideInRight 0.6s ease-in-out forwards",
        PageAppearLeft: "slideInLeft 0.3s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [],
};
