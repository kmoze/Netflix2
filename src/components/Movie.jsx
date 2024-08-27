function Movie({ movie }) {
  const baseURL = 'https://image.tmdb.org/t/p/w300/';

  return (
    <a>
      <img
        src={`${baseURL}${movie.poster_path}`}
        alt={movie.title}
        width={300}
      />
      <p className="movie-title">{movie.title}</p>
    </a>
  );
}

export default Movie;
