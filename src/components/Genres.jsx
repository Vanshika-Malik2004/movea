import React, { useState, useEffect } from "react";

const initialGenres = [
  { label: "Action", id: 28, isChecked: false },
  { label: "Adventure", id: 12, isChecked: false },
  { label: "Comedy", id: 35, isChecked: false },
  { label: "Family", id: 10751, isChecked: false },
  { label: "Crime", id: 80, isChecked: false },
  { label: "Horror", id: 27, isChecked: false },
  { label: "Romantic", id: 10749, isChecked: false },
  { label: "History", id: 36, isChecked: false },
  { label: "Mystery", id: 9648, isChecked: false },
];
const Genres = ({ movies, updateMovies }) => {
  const [choosen_genres, setChoosen_genres] = useState([]);

  const [genres, setGenes] = useState(initialGenres);

  const updateChoosenGenre = () => {
    const temp_arr = genres.filter((genre) => {
      return genre.isChecked;
    });
    const update_arr = temp_arr.map((genre) => {
      return genre.id;
    });
    setChoosen_genres(update_arr);
  };
  const toggle_genre = (id) => {
    const temp_genres = [...genres];
    for (let gen of temp_genres) {
      if (gen.id == id) {
        if (gen.isChecked == false) {
          gen.isChecked = true;
        } else {
          gen.isChecked = false;
        }
      }
    }
    setGenes(temp_genres);
    updateChoosenGenre();
  };

  const render_genres = () => {
    return (
      <div className="gen_genresList">
        {genres.map(function (genre) {
          return (
            <div
              className={
                genre.isChecked
                  ? "gen_checked gen_genre"
                  : "gen_unchecked gen_genre"
              }
              key={genre.id}
              onClick={(event) => {
                toggle_genre(genre.id);
              }}
              onDoubleClick={() => {
                toggle_genre(genre.id);
              }}
            >
              {genre.label}
            </div>
          );
        })}
      </div>
    );
  };
  //function to fetch movie data through api
  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njc5NjYyZDk0YjRmZjlmZWJiOWIxYjJhMGFhZjJiZCIsInN1YiI6IjY0ODVjZjI5ZTI3MjYwMDEwNzIyYjM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brVIieC8pCsslhY30XQXxD6VpQkcUEk197Tivo9d35Q",
      },
    };
    const chooseGenres = choosen_genres.join("%7C");
    console.log(chooseGenres);

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${chooseGenres}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    console.log(choosen_genres);
    const f = async () => {
      const response = await getMovies();
      const data = response.results;
      updateMovies(data);
      console.log(data);
    };
    f();
  }, [genres]);

  return (
    <div className="gen_main_container">
      <h3 className="gen_heading">Select Genres</h3>
      {render_genres()}
      <div className="gradient-wrapper">
        <div className="gen_gradient_container"></div>
      </div>
    </div>
  );
};

export default Genres;
