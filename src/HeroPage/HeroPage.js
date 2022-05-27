import Header from "./Header";
import flightClub from "../pics/flightclub.png";

const HeroPage = () =>{
    return (
      <div>
        <Header />
        <div
          className="h-screen w-screen xl:bg-cover bg-center"
          style={{ backgroundImage: `url(${flightClub})` }}
        ></div>
        <button className="absolute xl:left-40 bottom-60 xl:px-16 xl:py-12 xl:text-5xl px-12 py-8 left-32 font-bold transition-colors duration-300 rounded rounded-full shadow-xl bg-slate-500 hover:bg-slate-600 text-slate-100 shadow-slate-400/30">
          Browse your kicks
        </button>
      </div>
    );
}

export default HeroPage;
