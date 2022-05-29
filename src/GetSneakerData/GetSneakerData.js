import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://the-sneaker-database.p.rapidapi.com/search",
  params: { limit: "100", query: "airjordan" },
  headers: {
    "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
  },
};

const GetSneaker = () => {
  const [sneakerData, setSneakerData] = useState(null);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSneakerData(response.data);
        console.log(sneakerData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
};

export default GetSneaker;
