import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import Home from './Home/Home';
import Detail from './DetailPage/DetailPage';
import NotFound from './NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello React Router v6</h1> */}
        <Routes>
          <Route path='/hero' element={<HeroPage />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/detail' element={<Detail />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
