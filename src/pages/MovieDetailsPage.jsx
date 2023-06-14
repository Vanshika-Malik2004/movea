import React from "react";
import { useState, useEffect } from "react";
import bg from "../assets/images/travel.jpg";
const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieDetails = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njc5NjYyZDk0YjRmZjlmZWJiOWIxYjJhMGFhZjJiZCIsInN1YiI6IjY0ODVjZjI5ZTI3MjYwMDEwNzIyYjM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brVIieC8pCsslhY30XQXxD6VpQkcUEk197Tivo9d35Q",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/603692?language=en-US",
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    (async () => {
      const data = await getMovieDetails();
      setMovieDetails(data);
    })();
  }, []);
  const renderDetails = () => {
    return (
      <div
        className="movieDetails"
        style={{
          backgroundImage: `linear-gradient(
      to bottom,
      black 0%,
      transparent 10%,
      black 55%
    ),url(https://image.tmdb.org/t/p/original//fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg)`,
        }}
      >
        <h1>{movieDetails.title}</h1>
      </div>
    );
  };
  return (
    <div className="details_main_container">
      {movieDetails != null ? renderDetails() : null}
    </div>
  );
};

export default MovieDetailsPage;
