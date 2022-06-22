module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#FEF6E4",
        card: "#CCCCCC",
        detailBtn: "#FFB906",
        stockX: "#016240",
        flightClub: "#E91C22",
      },
      backgroundColor: {
        header: "#414244",
        main: "#E9E8E3",
        goat: "#232420",
      },
      margin: {
        centered: "0 auto",
      },
      width: {
        30: "30%",
        90: "90%",
      },
      height: {
        10: "10%",
        60: "60%",
      },
    },
    backgroundImage: {
      "hero-image": "url('./src/pics/flightclub.png')",
    },
    opacity: {
      95: ".95",
    },
  },
  plugins: [],
};
