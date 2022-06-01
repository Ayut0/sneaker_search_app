import GetSneakerData from "../GetSneakerData/GetSneakerData";
import Card from "../Card/Card";
import Header from "../HeroPage/Header";
import offWhite from "../pics/offwhite_theten.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="h-screen w-screen xl:bg-cover bg-center"
        style={{ backgroundImage: `url(${offWhite})` }}
      >
        <GetSneakerData />
        <section className="flex flex-wrap w-11/12 m-centered mt-12">
          {/* <Card />
          <Card />
          <Card /> */}
        </section>
      </main>
    </div>
  );
};

export default Home;
