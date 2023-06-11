import React from "react";
import PlayButton from "./PlayButton";
const MovieElement = ({ movie }) => {
  const genres = movie.genres.map((obj) => {
    return obj.name;
  });
  const genres_display = genres.join(" / ");
  return (
    <div className="movie_container">
      <div className="movie_poster">
        <img src={movie.posterURLs.original} />
        <div className="movie_nav">
          <PlayButton />
          <div className="movie_nav_content">
            <h3>{movie.title}</h3>
            <p>{genres_display}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieElement;
