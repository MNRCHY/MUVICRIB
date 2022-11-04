import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/detail/:id' element={ <MovieDetail /> } />
        <Route path='/result/:id' element= {<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
