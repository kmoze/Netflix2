import Movie from './Movie';
import './movielist.css';

function Movielist({ faveMovies, onFavMovie }) {
  return (
    <div className="fave-list">
      <ul className="fave-movies">
        {faveMovies.map((movie, index) => {
          return (
            <li className="movie">
              <Movie movie={movie} key={index} onFavMovie={onFavMovie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Movielist;
