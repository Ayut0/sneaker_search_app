import Header from "../HeroPage/Header";
// import offWhite from "../pics/offwhite_theten.jpg";
import Sneaker from "../GetSneakerData/GetSneakerData";
import Footer from "../HeroPage/Footer";
// import { useLocation } from "react-router-dom";
// import { ContextData } from "../GetSneakerData/GetSneakerData";
import { useState, useContext, useEffect } from "react";

const Home = ( {setData} ) => {
  const [value, setValue] = useState([]);
  const changeValue = (item) =>{
    setValue(item)
  }
  // const sneakerData = useContext(ContextData);
  // const data = useLocation();
  // console.log(data);
  console.log(value);
  // console.log(sneakerData);

  useEffect(() =>{
    setData(value)
  }, [])
  return (
    <div>
      <Header />
      <main
        className="w-screen h-screen bg-main bg-cover xl:bg-contain"
        // style={{ backgroundImage: `url(${offWhite})` }}
      >
        <Sneaker changeValue={changeValue}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
