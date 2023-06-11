import React, { useState, useEffect } from "react";

const initialGenres = [
  { label: "Action", id: 28, isChecked: false },
  { label: "Adventure", id: 12, isChecked: false },
  { label: "Comedy", id: 35, isChecked: false },
  { label: "Drama", id: 18, isChecked: false },
  { label: "Crime", id: 80, isChecked: false },
  { label: "Horror", id: 27, isChecked: false },
  { label: "Romance", id: 10749, isChecked: false },
  { label: "History", id: 36, isChecked: false },
  { label: "Mystery", id: 9648, isChecked: false },
];
const Genres = ({ movies, updateMovies }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "86e1c8cf1bmsh9e4d86eed2e1563p19fc31jsn49ff0ad6d912",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };
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
      } else {
        gen.isChecked = false;
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
    const gen_request = choosen_genres.join();
    console.log(gen_request);
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=${gen_request}&show_original_language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "86e1c8cf1bmsh9e4d86eed2e1563p19fc31jsn49ff0ad6d912",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    (async () => {
      const data = await getMovies();
      const output_arr = await data.result;
      console.log(output_arr);
      await updateMovies(output_arr);
    })();

    console.log(choosen_genres);
  }, [genres]);

  return (
    <div className="gen_main_container">
      <h3 className="gen_heading">Choose your Favourite Genres</h3>
      {render_genres()}
      <div className="gen_gradient_container"></div>
    </div>
  );
};

export default Genres;
