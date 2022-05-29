import Header from "../HeroPage/Header";
import offWhite from "../pics/offwhite_theten.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <section
        className="h-screen w-screen xl:bg-cover bg-center"
        style={{ backgroundImage: `url(${offWhite})` }}
      ></section>
      {/* <div class="absolute inset-0 bg-gray-600 bg-opacity-75"></div> */}
    </div>
  );
};

export default Home;
