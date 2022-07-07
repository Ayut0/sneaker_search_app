import React, { useState,} from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";

export const ContextData = React.createContext('');

const Sneaker = ({changeValue}) => {
  const [sneakerData, setSneakerData] = useState([]);
  const [sneakerName, setSneakerName] = useState('');
  const [sneakerLimit, setSneakerLimit] = useState('10');
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

  const GetSneakerData = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(sneakerLimit);

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

    //Loading spinner
    if(loading){
      return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
          {/* <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div> */}
          <svg
            role="status"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <h2 className="text-center text-gray-800 text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-gray-800">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      );
    }

  return (
    <ContextData.Provider value={{ sneakerData }}>
      <div>
        <form className="w-9/12 m-centered pt-32" onSubmit={GetSneakerData}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative lg:flex">
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
              className="block p-6 pl-10 w-full text-base font-bold text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="enter kick's name..."
              maxLength="25"
              value={sneakerName}
              onChange={(e) => setSneakerName(e.target.value)}
              required
            />
            <label
              for="numberOfSearch"
              className="form-label inline-block mb-2 mt-4 text-gray-700 lg:absolute lg:right-48"
            >
              Results
            </label>
            <input
              type="number"
              min="10"
              max="100"
              onChange={(e) => setSneakerLimit(e.target.value)}
              id="numberOfSearch"
              placeholder="Number of search (10 ~ 100)"
              className="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none lg:h-1/3 lg:mt-8 lg:ml-12"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 top-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:right-80"
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
