import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Sneaker = () => {
  const [sneakerData, setSneakerData] = useState([]);
  const [sneakerName, setSneakerName] = useState('');

  const options = {
    method: "GET",
    url: "https://the-sneaker-database.p.rapidapi.com/search",
    params: { limit: "100", query: `${sneakerName}` },
    headers: {
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    },
  };

  const GetSneakerData = (e) => {
    e.preventDefault();

    axios
      .request(options)
      .then( (response) =>{
        console.log(response.data);
        setSneakerData(response.data.results);
        console.log(response.data.results);
      })
      .catch( (error) =>{
        console.error(error);
        alert(error.message);
      });
    // useEffect(() => {
    // }, []);
  };

  // console.log(sneakerData);

  return (
    <div>
      <form className="w-9/12 m-centered pt-32" onSubmit={GetSneakerData}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-6 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter kick's name..."
            maxLength="25"
            value={sneakerName}
            onChange={(e) => setSneakerName(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <section className="flex flex-wrap w-11/12 m-centered mt-12 gap-y-12">
        {sneakerData &&
          sneakerData.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              image={data.image.small}
              brand={data.brand}
              estimatedValue={data.estimatedMarketValue}
              retailPrice={data.retailPrice}
              releaseDate={data.releaseDate || `Unknown`}
              links={data.links}
              story={data.story || `No story given`}
            />
          ))}
      </section>
    </div>
  );
}

export default Sneaker;
