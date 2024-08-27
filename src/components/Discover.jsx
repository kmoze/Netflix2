import { useState, useEffect } from 'react';
import Movie from './Movie';
import './discover.css';

const Discover = ({ onFavMovie }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://cw-api-1.onrender.com/movied/discover')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <div className="discover-list">
      <ul className="discover-movies">
        {movies.map((movie, index) => {
          return (
            <li className="movie">
              <Movie
                movie={movie}
                key={index}
                onFavMovie={() => onFavMovie(movie)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Discover;
