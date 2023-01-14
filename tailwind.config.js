module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#371f76",
        "weather-secondary": "#C8A4D4",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },

    container: {
      padding: "2em",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
