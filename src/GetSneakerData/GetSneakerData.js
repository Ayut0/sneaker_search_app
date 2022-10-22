import React, { useEffect, useState,} from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import LoadingSpinner from "../shared/Loading";

export const ContextData = React.createContext('');

const Sneaker = ({changeValue}) => {
  const [sneakerData, setSneakerData] = useState([]);
  const [sneakerName, setSneakerName] = useState('');
  const [sneakerLimit, setSneakerLimit] = useState('20');
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://the-sneaker-database.p.rapidapi.com/search",
    params: { limit: `${sneakerLimit}`, query: `${sneakerName}` },
    headers: {
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    },
  };

  const getSneakerData = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .request(options)
      .then( (response) =>{
        setSneakerData(response.data.results);
        setLoading(false);
      })
      .catch( (error) =>{
        console.error(error);
        alert(error.message);
        setLoading(false);
      });
    };

    changeValue(sneakerData);

    useEffect(() =>{
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
        params: {limit: '20', brand: 'nike'},
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
          'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then(function (response) {
        setLoading(false);
        setSneakerData(response.data.results);
      }).catch(function (error) {
        console.error(error);
        setLoading(false);
      });
    }, [])

    //Loading spinner
    if(loading){
      return <LoadingSpinner />;
    }

  return (
    <ContextData.Provider value={{ sneakerData }}>
      <div>
        <form className="w-8/12 m-centered pt-32" onSubmit={getSneakerData}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative lg:flex lg:justify-between">
            <div className="flex absolute top-7 left-0 items-center pl-3 pointer-events-none">
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
              className="block mb-4 p-6 pl-10 w-full text-base font-bold text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="enter kick's name..."
              maxLength="40"
              value={sneakerName}
              onChange={(e) => setSneakerName(e.target.value)}
              required
            />
            <select
              id="underline_select"
              onChange={(e) => setSneakerLimit(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 lg:h-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Amount of result</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <button
              type="submit"
              className="text-white absolute right-2.5 top-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:right-96"
            >
              Search
            </button>
          </div>
        </form>
        <section className="flex flex-wrap w-11/12 m-centered mt-12 gap-y-12 pb-12">
          {sneakerData &&
            sneakerData.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.image.small}
                brand={data.brand}
                estimatedValue={
                  data.estimatedMarketValue !== 0
                    ? data.estimatedMarketValue
                    : "Unknown"
                }
                retailPrice={data.retailPrice}
                releaseDate={data.releaseDate || `Unknown`}
                links={data.links}
                story={data.story || `No story given`}
                color={data.colorway}
              />
            ))}
        </section>
        <Outlet />
      </div>
    </ContextData.Provider>
  );
}

export default Sneaker;
