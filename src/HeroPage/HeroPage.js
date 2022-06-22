import Header from "./Header";
import flightClub from "../pics/flightclub.png";
import { Link } from "react-router-dom";

const HeroPage = () =>{
    return (
      <div>
        <Header />
        <div
          className="h-screen w-screen xl:bg-cover bg-center"
          style={{ backgroundImage: `url(${flightClub})` }}
        ></div>
        <Link
          to="/home"
          className="absolute text-xl xl:left-40 xl:px-16 xl:py-12 xl:text-4xl px-8 py-8 left-20 top-96 font-black transition-colors duration-300 rounded rounded-full shadow-xl bg-slate-500 hover:bg-slate-600 text-slate-100 shadow-slate-400/30 opacity-90 animate-bounce"
          state={{state: 'data'}}
        >
          Browse your kicks
        </Link>
      </div>
    );
}

export default HeroPage;
