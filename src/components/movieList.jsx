import React from "react";
import MovieElement from "./MovieElement";
const MovieList = ({ movies }) => {
  const renderMovies = () => {
    return movies.map((element) => {
      return <MovieElement movie={element} key={element.id} />;
    });
  };
  return (
    <div className="ml_main_container">
      <h1>Choose You Favourite</h1>
      <div className="ml_movieList">{renderMovies()}</div>
    </div>
  );
};

export default MovieList;
