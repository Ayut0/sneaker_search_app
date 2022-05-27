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
        <button class="absolute left-40 bottom-60 px-16 py-12 text-5xl font-bold transition-colors duration-300 rounded rounded-full shadow-xl bg-slate-500 hover:bg-slate-600 text-slate-100 shadow-slate-400/30">
          Browse your kicks
        </button>
      </div>
    );
}

export default HeroPage;
