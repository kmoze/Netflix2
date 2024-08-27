import './movie.css';

function Movie({ movie, onFavMovie }) {
  const baseURL = 'https://image.tmdb.org/t/p/w300/';

  return (
    <>
      <div className="movie-poster" id={movie.id}>
        <img
          src={`${baseURL}${movie.poster_path}`}
          alt={movie.title}
          width={250}
          className="poster-img"
        />
        <div className="title-btn">
          <p className="movie-title">{movie.title}</p>
          <button className="plus-btn" onClick={() => onFavMovie(movie)}>
            ➕
          </button>
        </div>
      </div>
    </>
  );
}

export default Movie;
