import React from "react";

const MovieList = (props) => {
  const { movies, history } = props;
  return (
    <div className="movie-list">
      {movies
        ? movies.map((movie) => (
            <MovieDetails {...props} key={movie.id} movie={movie} />
          ))
        : null}
    </div>
  );
};

function MovieDetails({ movie, history }) {
  const { title, director, metascore, id } = movie;
  return (
    <div
      onClick={() => history.replace(`/movies/${id}`)}
      className="movie-card"
    >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
