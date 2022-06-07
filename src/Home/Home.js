import Header from "../HeroPage/Header";
import offWhite from "../pics/offwhite_theten.jpg";
import Sneaker from "../GetSneakerData/GetSneakerData";
import Footer from "../HeroPage/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="w-screen h-auto bg-cover xl:bg-contain"
        style={{ backgroundImage: `url(${offWhite})` }}
      >
        <Sneaker />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
