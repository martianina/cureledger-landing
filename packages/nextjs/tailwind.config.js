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
    primary: "#56c5fb", // Bright sky blue
    "primary-content": "#FFFFFF", // White text content
    secondary: "#000000", // Black
    "secondary-content": "#fd9905", // Vibrant orange
    accent: "#56c5fb", // Bright sky blue
    "accent-content": "#FFFFFF", // White text content
    neutral: "#ededed", // Light gray
    "neutral-content": "#000000", // Black text content
    "base-100": "#000000", // Black base
    "base-200": "#000000", // Black (no variation in shade)
    "base-300": "#000000", // Black (no variation in shade)
    "base-content": "#FFFFFF", // White text content
    info: "#ffa810", // Vibrant orange
    success: "#2baceb", // Bright cyan-blue
    warning: "#ffa810", // Vibrant orange
    error: "#ffa810", // Vibrant orange

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
