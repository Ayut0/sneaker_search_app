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
  console.log(data);
  console.log(location);
  // console.log(searchParams);

  return (
    <Fragment>
      <Header />
      <Link to="/home">Back to home</Link>
      {/* <section className="lg:flex m-centered w-11/12">
        <div>
          <img alt="" src=""></img>
        </div>
        <div>
          <h2 className="font-black">
            {props.name}: {`${detailId}`}
          </h2>
          <section>
            <h3 className="font-bold">Release Date: </h3>
            <span>{props.releaseDate}</span>
          </section>
          <section>
            <h3 className="font-bold">Brand: </h3>
            <span>{props.brand}</span>
          </section>
          <section>
            <h3 className="font-bold">Retail Price: </h3>
            <span>{props.retailPrice}</span>
          </section>
          <section>
            <h3 className="font-bold">Estimated Market Price: </h3>
            <span>${props.estimatedValue}</span>
          </section>
          <article>
            <h3>Story</h3>
            <span>{props.story}</span>
          </article>
          <section>
            <h3>Buy at</h3>
            <div className="flex">
              <button>FLIGHT CLUB</button>
              <button>Stock X</button>
              <button>GOAT</button>
            </div>
          </section>
        </div>
      </section> */}
    </Fragment>
  );
};

export default Detail;
