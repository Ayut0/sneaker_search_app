const Card = (props) =>{
    return (
      <div className="bg-card opacity-95 m-centered w-full lg:w-30">
        <div>
          <img src="" alt=""></img>
        </div>
        <div>
          <h3 className="font-bold">Sneaker Name</h3>
        </div>
        <div>
          <ul>
            <li className="font-bold">Release Date:</li>
            <li className="font-bold">Brand:</li>
            <li className="font-bold">Estimated Marker Value:</li>
          </ul>
        </div>
        <button className="bg-detailBtn hover:bg-detailBtn text-white font-bold hover:text-white py-2 px-4 border border-detailBtn hover:border-transparent rounded">
          <a href="#">See detail</a>
        </button>
      </div>
    );
}

export default Card;
