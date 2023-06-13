import React, { useState, useEffect } from "react";
import Logo from "./../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
const SearchByTitle = ({ movies, updateMovies }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const getMoviesByTitle = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njc5NjYyZDk0YjRmZjlmZWJiOWIxYjJhMGFhZjJiZCIsInN1YiI6IjY0ODVjZjI5ZTI3MjYwMDEwNzIyYjM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brVIieC8pCsslhY30XQXxD6VpQkcUEk197Tivo9d35Q",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTitle}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
    console.log(searchTitle);
    const data = await getMoviesByTitle();
    console.log(data);
    updateMovies(data);
  };
  return (
    <div className="st_main_container">
      <img src={Logo} alt="logo" width={120} height={35} />
      <form>
        <input
          className="st_title"
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
        <button
          className="st_searchBtn"
          onClick={(e) => {
            handlesubmit(e);
          }}
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchByTitle;
