import GetSneakerData from "../GetSneakerData/GetSneakerData";
import Header from "../HeroPage/Header";
import offWhite from "../pics/offwhite_theten.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <section
        className="h-screen w-screen xl:bg-cover bg-center"
        style={{ backgroundImage: `url(${offWhite})` }}
      >
        <GetSneakerData />
      </section>
    </div>
  );
};

export default Home;
