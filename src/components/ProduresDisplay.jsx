import React from "react";

const ProduresDisplay = ({ logo }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${logo}`}
        className="producer_logo"
      />
    </>
  );
};

export default ProduresDisplay;
