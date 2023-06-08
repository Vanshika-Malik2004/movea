import React, { useState, useEffect } from "react";

const initialGenres = [
  { label: "Action", id: "action", isChecked: false },
  { label: "Adventure", id: "adventure", isChecked: false },
  { label: "Comedy", id: "comedy", isChecked: false },
  { label: "Drama", id: "drama", isChecked: false },
  { label: "Crime", id: "crime", isChecked: false },
  { label: "Horror", id: "horror", isChecked: false },
  { label: "Family", id: "family", isChecked: false },
  { label: "Romance", id: "romance", isChecked: false },
  { label: "History", id: "history", isChecked: false },
  { label: "Mystery", id: "mystery", isChecked: false },
];
const Genres = () => {
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
  useEffect(() => {
    updateChoosenGenre();
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
