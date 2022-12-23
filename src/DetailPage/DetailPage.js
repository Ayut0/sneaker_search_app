import React, { Fragment} from "react";
import { useParams, useLocation} from "react-router-dom";
import Header from "../HeroPage/Header";
import Breadcrumbs from "../Breadcrumbs";
import Footer from "../HeroPage/Footer";


const Detail = ({data}) => {
  const params = useParams();
  const detailId = params.detailId;
  const location = useLocation();
  const sneakerInfo = location.state;
  const linkArray = Object.entries(sneakerInfo.links);

  const unEscape = (htmlStr) =>{
    htmlStr = htmlStr.replace(/&lt;/g, "<");
    htmlStr = htmlStr.replace(/&gt;/g, ">");
    htmlStr = htmlStr.replace(/&quot;/g, '"');
    htmlStr = htmlStr.replace(/&#39;/g, "'");
    htmlStr = htmlStr.replace(/&amp;/g, "&");
    return htmlStr;
  }

  const resaleMarket = (company) => {
    if(company === "stockX"){
      return "text-stockX";
    }else if(company === "goat"){
      return "text-white bg-goat"
    }else if(company === "flightClub"){
      return "text-flightClub";
    }
  }

  const linkButtons = () => {
    return linkArray.map((item, index)=>{
      return (
        item[1] && (
          <span
            className={`w-full hover:bg-gray-300 border-gray-400 cursor-pointer text-center p-8 border-solid border rounded-lg lg:w-5/12 lg:p-4
            ${resaleMarket(item[0])}
            `}
            key={index}
          >
            <a
              href={`${item[1]}`}
              className="text-2xl font-bold"
            >{`${item[0]}`}</a>
          </span>
        )
      );
    })
  }

  return (
    <Fragment>
      <Header />
      <section className="bg-detail pt-28 pb-12">
        {/* <Breadcrumbs></Breadcrumbs> */}
        <section className="lg:flex m-centered w-11/12">
          <div className="lg:w-1/2">
            <img alt={sneakerInfo.name} src={sneakerInfo.image}></img>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-black text-center text-3xl mb-12">
              {sneakerInfo.name}
            </h2>
            <section className="flex justify-between align-center mb-3 items-center">
              <h3 className="font-bold text-xl">Release Date</h3>
              <span>{sneakerInfo.releaseDate}</span>
            </section>
            <section className="flex justify-between align-center mb-3 items-center">
              <h3 className="font-bold text-xl">Brand</h3>
              <span>{sneakerInfo.brand}</span>
            </section>
            <section className="flex justify-between align-center mb-3 items-center">
              <h3 className="font-bold text-xl">Colorway</h3>
              <span>{sneakerInfo.color}</span>
            </section>
            <section className="flex justify-between align-center mb-3 items-center">
              <h3 className="font-bold text-xl">Retail Price</h3>
              <span>US${sneakerInfo.retailPrice}</span>
            </section>
            <section className="flex justify-between align-center mb-3 items-center">
              <h3 className="font-bold text-xl">Estimated Market Price</h3>
              <span>US${sneakerInfo.estimatedValue}</span>
            </section>
            <article className="mb-3">
              <h3 className="font-bold text-xl mb-2">Story</h3>
              <span>{unEscape(sneakerInfo.story)}</span>
            </article>
            <section>
              <h3 className="font-bold text-xl">Check availability at</h3>
              <div className="flex m-centered flex-wrap w-90 justify-center gap-y-4 mt-8 lg:gap-x-12">
                {linkButtons()}
              </div>
            </section>
          </div>
        </section>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Detail;
