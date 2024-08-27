import { useState } from 'react';
import './App.css';
import Discover from './components/Discover';
import Movielist from './components/Movielist';

function App() {
  const [faveMovies, setFaveMovies] = useState([]);

  const onFavMovie = (movie) => {
    console.log(movie);
    if (!faveMovies.includes(movie)) {
      setFaveMovies([...faveMovies, movie]);
    } else {
      setFaveMovies(faveMovies.filter(el => el.id !== movie.id))
    }
  };

  return (
    <>
      <h2 className="list-title">My Favs </h2>
      <Movielist onFavMovie={onFavMovie} faveMovies={faveMovies} />
      <h2 className="list-title">Discover</h2>
      <Discover onFavMovie={onFavMovie} />
    </>
  );
}

export default App;
