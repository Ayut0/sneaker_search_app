import { Link, useParams } from "react-router-dom";
import Header from "../HeroPage/Header";

const Detail = () => {
  const detailId = useParams();
  console.log(detailId);

  return (
    <div>
      <Header />
      <Link to="/home">Back to home</Link>
      <section className="lg:flex m-centered w-11/12">
        <div>
          <img alt="" src=""></img>
        </div>
        <div>
          <h2 className="font-black">Sneaker name: {`${detailId.detailId}`}</h2>
          <section>
            <h3 className="font-bold">Release Date: </h3>
            <span>YYYY/MM/DD</span>
          </section>
          <section>
            <h3 className="font-bold">Brand: </h3>
            <span>Nike</span>
          </section>
          <section>
            <h3 className="font-bold">Retail Price: </h3>
            <span>$$$</span>
          </section>
          <section>
            <h3 className="font-bold">Estimated Market Price: </h3>
            <span>$$$</span>
          </section>
          <article>
            <h3>Story</h3>
            <span>This sneaker is ....</span>
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
      </section>
    </div>
  );
};

export default Detail;
