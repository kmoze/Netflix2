import { useState, useEffect } from 'react';

const baseURL = 'https://image.tmdb.org/t/p/w300/'

const Discover = () => {
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
    <div>

      {movies.map((movie) => (
        <img key={movie.id} src={`${baseURL}${movie.poster_path}`} alt={movie.title} width={100} />
      ))}
    </div>
  );
};
export default Discover;