import React from "react";
import { useState, useEffect } from "react";
import bg from "../assets/images/travel.jpg";
import logo from "../assets/images/logo.png";
import GenreDisplayBtn from "../components/GenreDisplayBtn";
import ProduresDisplay from "../components/ProduresDisplay";
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
  const genre_display = () => {
    return (
      <div className="genre_display_list">
        {movieDetails.genres.map((e) => {
          return <GenreDisplayBtn key={e.id}>{e.name}</GenreDisplayBtn>;
        })}
      </div>
    );
  };
  const languagesDisplay = () => {
    return (
      <div className="languagesDisplay">
        {movieDetails.spoken_languages.map((e) => {
          return <span>{e.english_name}</span>;
        })}
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div className="details_main_container">
        <div
          className="movieDetails"
          style={{
            backgroundImage: `linear-gradient(
      to bottom,
      black 0%,
      transparent 10%,
    ),url(https://image.tmdb.org/t/p/original/1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg)`,
          }}
        >
          <div>
            {" "}
            <h1>{movieDetails.title}</h1>
            <h3 className="tagline">{movieDetails.tagline}</h3>
          </div>
          {genre_display()}
          <div className="showDetails">
            <div className="DisplayDetailsCards">
              <h3>RELEASE DATE</h3>
              <h2>{movieDetails.release_date}</h2>
            </div>
            <div className="DisplayDetailsCards">
              <h3>REVENUE</h3>
              <h2>{movieDetails.revenue} INR</h2>
            </div>
            <div className="DisplayDetailsCards">
              <h3>RUNTIME</h3>
              <h2>{movieDetails.runtime} mins</h2>
            </div>
            <div className="DisplayDetailsCards">
              <h3>BUDGET</h3>
              <h2>{movieDetails.budget} INR</h2>
            </div>
          </div>
        </div>
        <div className="black">
          <div className="movie_overview">
            <h3 className="movie_heading">OVERVIEW</h3>
            <p>{movieDetails.overview}</p>
          </div>
          <div className="languages">
            <h3 className="movie_heading">AVAILABLE IN</h3>
            {languagesDisplay()}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <img src={logo} alt="logo" width={120} className="details_logo" />
      {movieDetails != null ? renderDetails() : null}
    </>
  );
};

export default MovieDetailsPage;
