module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'heading': "#FEF6E4",
      },
      backgroundColor: {
        'header': "#414244",
      },
    },
    backgroundImage:{
      'hero-image': "url('./src/pics/flightclub.png')",
    }
  },
  plugins: [],
};
