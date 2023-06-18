import React, { useState } from "react";
import Genres from "../components/Genres";
import MovieList from "../components/MovieList";
import SearchByTitle from "../components/SearchByTitle";
const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const updateMovies = (updateList) => {
    setMovies(updateList);
  };
  return (
    <>
      <SearchByTitle movies={movies} updateMovies={updateMovies} />
      <div className="mp_main_container">
        <Genres movies={movies} updateMovies={updateMovies} />
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default MainPage;
