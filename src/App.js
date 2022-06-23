// import './App.css';
import { Routes, Route} from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import Home from './Home/Home';
import Detail from './DetailPage/DetailPage';
import NotFound from './NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';

function App(props) {
  const [data, setData] = useState([]);
  const changeData = (element) =>{
    setData(element)
  }
  useEffect(() =>{
    setData(data)
  }, [])
  // console.log(data);
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home setData={setData} />} />
        <Route path="/:detailId" element={<Detail data={data}/>} />
        <Route path="/" element={<HeroPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
