import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bg from "../assets/images/travel.jpg";
import logo from "../assets/images/logo.png";
import GenreDisplayBtn from "../components/GenreDisplayBtn";
import ProduresDisplay from "../components/ProduresDisplay";
const MovieDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const getMovieCast = async (tconst) => {
    const url = `https://imdb8.p.rapidapi.com/title/get-top-cast?tconst=${tconst}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "980d3a5a5emsh2ff2b73d09fd093p1b6735jsn9ac8241bef33",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const updateData = await data.map((e) => {
      return e.split("/")[2];
    });
    console.log(updateData);
    const castDetails = [];
    for (let i of updateData.slice(0, 15)) {
      const url1 = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${i}`;
      const options1 = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "980d3a5a5emsh2ff2b73d09fd093p1b6735jsn9ac8241bef33",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };
      const actorBioData = await fetch(url1, options1);
      const actorBio = await actorBioData.json();
      castDetails.push(actorBio);
    }
    return castDetails;
  };
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
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
      console.log(data.imdb_id);
      const cast = await getMovieCast(data.imdb_id);
      console.log(cast);
      setMovieCast(cast);
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
  const ProducersDisplay = () => {
    return (
      <div className="ProcucerDisplay">
        {movieDetails.production_companies.map((e) => {
          return (
            <div className="producer">
              <ProduresDisplay logo={e.logo_path}></ProduresDisplay>
              <h4>{e.name}</h4>
            </div>
          );
        })}
      </div>
    );
  };
  const castDisplay = () => {
    return (
      <div className="castList">
        {movieCast.map((e) => {
          return (
            <div className="actor">
              <img src={e.image.url} />
              <h4>{e.name}</h4>
            </div>
          );
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
      black 95%
    ),url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
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
          <div className="topCast">
            <h3 className="movie_heading">TOP CASTS</h3>
            {movieCast != null ? castDisplay() : null}
          </div>
        </div>
      </div>
    );
  };
  const loader = () => {
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };
  return (
    <>
      <img src={logo} alt="logo" width={120} className="details_logo" />
      {movieDetails != null ? renderDetails() : loader()}
    </>
  );
};

export default MovieDetailsPage;
