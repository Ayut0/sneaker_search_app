import Header from "../HeroPage/Header";
import offWhite from "../pics/offwhite_theten.jpg";
import Sneaker from "../GetSneakerData/GetSneakerData";
import Footer from "../HeroPage/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="h-screen w-screen xl:bg-cover bg-center"
        style={{ backgroundImage: `url(${offWhite})` }}
      >
        <Sneaker />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
