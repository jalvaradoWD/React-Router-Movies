import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies
        ? movies.map((movie) => <MovieDetails key={movie.id} movie={movie} />)
        : null}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
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
