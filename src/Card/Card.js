import React, { Fragment, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Card = (props) => {
  const [data, setData] = useState(props);
  const value = data;
  console.log(data);
  const navigate = useNavigate();
  const toDetail = () =>{
    navigate(`/detail/${props.id}`, {state: data})
  }

  return (
    <Fragment>
      <div className="bg-card opacity-95 m-centered w-full lg:w-30">
        <div className="w-11/12 h-60 m-centered">
          <img src={props.image} alt={props.name}></img>
        </div>
        <div>
          <h3 className="font-bold text-center text-2xl h-10">{props.name}</h3>
        </div>
        <div className="w-11/12 m-centered">
          <ul className="block p-4">
            <li className="font-bold">Release Date: {props.releaseDate}</li>
            <li className="font-bold">Brand: {props.brand}</li>
            <li className="font-bold">
              Estimated Market Value: $
              {props.estimatedValue.toLocaleString("en-US")}
            </li>
          </ul>
        </div>
        <button
          onClick={() => toDetail()}
          className="block m-centered bg-detailBtn hover:bg-detailBtn text-white font-bold hover:text-white py-2 px-4 border border-detailBtn hover:border-transparent rounded"
        >
          See detail
        </button>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Card;
