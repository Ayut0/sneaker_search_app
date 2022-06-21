import React, { Fragment} from "react";
import { Link, useParams, useLocation} from "react-router-dom";
import Header from "../HeroPage/Header";


const Detail = ({data}) => {
  const params = useParams();
  const detailId = params.detailId;
  const location = useLocation();
  console.log(location.state);
  const sneakerInfo = location.state;

  console.log(Object.entries(sneakerInfo.links));
  const linkArray = Object.entries(sneakerInfo.links);

  const linkButtons = () => {
    return linkArray.map((item, index)=>{
      return (
        <span><a href={`${item[1]}`}>{`${item[0]}`}</a></span>
      )
    })
  }

  console.log(linkButtons())


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
              {linkButtons()}
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Detail;
