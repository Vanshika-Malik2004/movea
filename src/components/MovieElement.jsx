import React from "react";
import PlayButton from "./PlayButton";
import { Link } from "react-router-dom";
const ShowGenres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
const MovieElement = ({ movie }) => {
  const genres = movie.genre_ids.map((obj) => {
    for (let i = 0; i < ShowGenres.length; i++) {
      if (ShowGenres[i].id == obj) {
        return ShowGenres[i].name;
      }
    }
  });
  const genres_display = genres.join(" / ");
  return (
    <div className="movie_container" key={movie.id}>
      <div className="movie_poster">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
        <div className="movie_nav">
          <div className="movie_nav_content">
            <Link to={`/moviedetails/${movie.id}`}>
              <h3 className="me_movie_name">{movie.title}</h3>
            </Link>

            <p>{genres_display}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieElement;
