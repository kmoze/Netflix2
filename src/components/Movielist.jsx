import Movie from './Movie';
import './movielist.css';

function Movielist({ faveMovies, onFavMovie }) {
  return (
    <div className="fave-list">
      <ul className="fave-movies">
        {faveMovies.map((movie) => {
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
}

export default Movielist;
