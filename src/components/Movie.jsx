import './movie.css';

function Movie({ movie }) {
  const baseURL = 'https://image.tmdb.org/t/p/w300/';

  return (
    <>
      <div className="movie-poster">
        <img
          src={`${baseURL}${movie.poster_path}`}
          alt={movie.title}
          width={300}
        />
        <div className="title-btn">
          <p className="movie-title">{movie.title}</p>
          <button className="plus-btn">➕</button>
        </div>
      </div>
    </>
  );
}

export default Movie;
