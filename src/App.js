import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import Detail from './DetailPage/DetailPage';
import { useEffect, useState } from 'react';

const Home = React.lazy(() => import('./Home/Home.js'));
const HeroPage = React.lazy(() => import('./HeroPage/HeroPage.js'));
const NotFound = React.lazy(() => import('./NotFoundPage/NotFoundPage.js'));

function App() {
  const [data, setData] = useState([]);
  const changeData = (element) =>{
    setData(element)
  }
  useEffect(() =>{
    setData(data)
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<span>Loading....</span>}>
        <Routes>
          <Route path="/home" element={<Home setData={setData} />} />
          <Route path="/:detailId" element={<Detail data={data}/>} />
          <Route path="/" element={<HeroPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
