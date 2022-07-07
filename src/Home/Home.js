import Header from "../HeroPage/Header";
import Sneaker from "../GetSneakerData/GetSneakerData";
import Footer from "../HeroPage/Footer";
import { useState, useEffect } from "react";

const Home = ( {setData} ) => {
  const [value, setValue] = useState([]);
  const changeValue = (item) =>{
    setValue(item)
  }
  useEffect(() =>{
    setData(value)
  }, [])
  return (
    <div>
      <Header />
      <main
        className="w-screen min-h-screen bg-main bg-cover xl:bg-contain"
        // style={{ backgroundImage: `url(${offWhite})` }}
      >
        <Sneaker changeValue={changeValue} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
