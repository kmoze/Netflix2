import { useState } from 'react';
import './App.css';
import Discover from './components/Discover';
import Movielist from './components/Movielist';

function App() {
  const [faveMovies, setFaveMovies] = useState([]);

  const onFavMovie = (movie) => {
    console.log(movie);
    setFaveMovies([...faveMovies, movie]);
  };

  return (
    <>
      <h2 className="list-title">My Favs</h2>
      <Movielist faveMovies={faveMovies} />
      <h2 className="list-title">Discover</h2>
      <Discover onFavMovie={onFavMovie} />
    </>
  );
}

export default App;
