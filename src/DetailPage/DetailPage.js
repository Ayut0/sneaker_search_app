import React, { Fragment, useContext } from "react";
// import { SneakerData } from "../Card/Card";
import { Link, useParams, useLocation} from "react-router-dom";
import Header from "../HeroPage/Header";


const Detail = ({data}) => {
  const params = useParams();
  const detailId = params.detailId;
  // const data = useContext(SneakerData)
  const location = useLocation();
  // const searchParams = createSearchParams(props);
  // console.log(params);
  // console.log(detailId);
  // console.log(props);
  // console.log(data);
  console.log(location.state);
  const sneakerInfo = location.state;
  // console.log(searchParams);

  return (
    <Fragment>
      <Header />
      <Link to="/home">Back to home</Link>
      <section className="lg:flex m-centered w-11/12">
        <div>
          <img alt={sneakerInfo.name} src={sneakerInfo.image}></img>
        </div>
        <div>
          <h2 className="font-black text-center text-3xl">
            {sneakerInfo.name}
          </h2>
          <section>
            <h3 className="font-bold text-xl">Release Date: </h3>
            <span>{sneakerInfo.releaseDate}</span>
          </section>
          <section>
            <h3 className="font-bold text-xl">Brand: </h3>
            <span>{sneakerInfo.brand}</span>
          </section>
          <section>
            <h3 className="font-bold text-xl">Retail Price: </h3>
            <span>{sneakerInfo.retailPrice}</span>
          </section>
          <section>
            <h3 className="font-bold text-xl">Estimated Market Price: </h3>
            <span>${sneakerInfo.estimatedValue}</span>
          </section>
          <article>
            <h3 className="font-bold text-xl">Story</h3>
            <span>{sneakerInfo.story}</span>
          </article>
          <section>
            <h3 className="font-bold text-xl">Check availability at</h3>
            <div className="flex">
              <button>FLIGHT CLUB</button>
              <button>Stock X</button>
              <button>GOAT</button>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Detail;
