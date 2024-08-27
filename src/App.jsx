import { useState } from 'react';
import './App.css';
import Discover from './components/Discover';
import Movielist from './components/Movielist';

function App() {
  const [faveMovies, setFaveMovies] = useState([]);

  const onFavMovie = (movie) => {
    if (!faveMovies.includes(movie)) {
      setFaveMovies([...faveMovies, movie]);
    } else {
      setFaveMovies(faveMovies.filter((el) => el.id !== movie.id));
    }
  };

  return (
    <>
      <div className="navbar">
        <img
          src="src/assets/BrandAssets_Logos_01-Wordmark.jpg"
          alt="netflix-logo"
        />
        <h3>
          <span className="search-emoji">🔍</span> Search
        </h3>
      </div>
      {faveMovies.length > 0 ? (
        <>
          <h2 className="list-title">My Favs</h2>
          <Movielist onFavMovie={onFavMovie} faveMovies={faveMovies} />
        </>
      ) : (
        <h2 className="fav-placeholder">
          Favourite some movies to add to your list...
        </h2>
      )}
      <h2 className="list-title">Discover</h2>
      <Discover onFavMovie={onFavMovie} faveMovies={faveMovies} />
    </>
  );
}

export default App;
