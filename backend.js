const PORT = 8000;
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/sneaker-data", (req, res) => {
  const options = {
    method: "GET",
    url: "https://the-sneaker-database.p.rapidapi.com/search",
    params: { limit: "10", query: "airjordan" },
    headers: {
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on ${PORT}`));
