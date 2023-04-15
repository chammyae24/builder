/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
    // "!./node_modules"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        builder: "#2A292A",
        "builder-darker": "#242324",
        "builder-input": "#323132",
        "builder-box": "#2E2E30",
        "builder-preview": "#2E2B32"
      }
    }
  },
  plugins: []
};
