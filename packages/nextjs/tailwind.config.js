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
          primary: "#56c5fb", // Bright periwinkle/violet
          "primary-content": "#FFFFFF",
          secondary: "#000000", // Cool black
          "secondary-content": "#fd9905", // Light violet
          accent: "#56c5fb", // Bright periwinkle/violet
          "accent-content": "#FFFFFF",
          neutral: "#ededed", // Very light violet
          "neutral-content": "#000000", // Cool black
          "base-100": "#000000", // Cool black base
          "base-200": "#000000", // Slightly lighter black
          "base-300": "#000000", // Even lighter black
          "base-content": "#FFFFFF", // White text content
          info: "#ffa810", // Light violet
          success: "#2baceb", // Bright periwinkle/violet
          warning: "#ffa810", // Very light violet
          error: "#ffa810", // Light violet

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
