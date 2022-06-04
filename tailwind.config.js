module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#FEF6E4",
        card: "#CCCCCC",
        detailBtn: "#FFB906",
      },
      backgroundColor: {
        header: "#414244",
      },
      margin: {
        centered: "0 auto",
      },
      width: {
        "30": "30%",
      },
      height: {
        "60": "60%",
      }
    },
    backgroundImage: {
      "hero-image": "url('./src/pics/flightclub.png')",
    },
    opacity: {
      "95": ".95"
    }
  },
  plugins: [],
};
