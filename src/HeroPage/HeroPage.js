import Header from "./Header";
import flightClub from "../pics/flightclub.png";

const HeroPage = () =>{
    return (
      <div>
        <Header />
        <div
          className="h-screen w-screen bg-cover"
          style={{ backgroundImage: `url(${flightClub})` }}
        ></div>
      </div>
    );
}

export default HeroPage;
