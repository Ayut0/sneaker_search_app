// import './App.css';
import { Routes, Route} from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import Home from './Home/Home';
import Detail from './DetailPage/DetailPage';
import NotFound from './NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/" element={<HeroPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
