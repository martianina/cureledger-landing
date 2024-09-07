/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "customDarkTheme",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        customDarkTheme: {
          primary: "#7C83DB", // Bright periwinkle/violet
          "primary-content": "#FFFFFF",
          secondary: "#000000", // Cool black
          "secondary-content": "#B3A7FF", // Light violet
          accent: "#7C83DB", // Bright periwinkle/violet
          "accent-content": "#FFFFFF",
          neutral: "#D7C7FF", // Very light violet
          "neutral-content": "#000000", // Cool black
          "base-100": "#000000", // Cool black base
          "base-200": "#000000", // Slightly lighter black
          "base-300": "#000000", // Even lighter black
          "base-content": "#FFFFFF", // White text content
          info: "#B3A7FF", // Light violet
          success: "#7C83DB", // Bright periwinkle/violet
          warning: "#D7C7FF", // Very light violet
          error: "#B3A7FF", // Light violet

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
};
