import { useState, useEffect } from 'react';
import Movie from './Movie';
import './discover.css';

const Discover = ({ onFavMovie, faveMovies }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://cw-api-1.onrender.com/movied/discover')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div className="discover-list">
      <ul className="discover-movies">
        {movies.map((movie) => {
          return (
            <li className="movie" key={movie.id}>
              <Movie
                movie={movie}
                onFavMovie={onFavMovie}
                faveMovies={faveMovies}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Discover;
