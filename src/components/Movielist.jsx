import Movie from './Movie';
import './movielist.css';

function Movielist({ faveMovies }) {
  return (
    <div className="fave-list">
      <ul className="fave-movies">
        {faveMovies.map((movie, index) => {
          return (
            <li className="movie">
              <Movie movie={movie} key={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Movielist;
