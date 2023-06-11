import React from "react";
import MovieElement from "./MovieElement";
const MovieList = ({ movies }) => {
  const renderMovies = () => {
    return movies.map((element) => {
      return <MovieElement movie={element} key={element.imdbid} />;
    });
  };
  return (
    <div className="ml_main_container">
      <div className="ml_movieList">{renderMovies()}</div>
    </div>
  );
};

export default MovieList;
