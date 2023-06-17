import React from "react";

const ProduresDisplay = ({ logo }) => {
  return (
    <div className="logo_bg">
      <img
        src={`https://image.tmdb.org/t/p/original/${logo}`}
        className="producer_logo"
      />
    </div>
  );
};

export default ProduresDisplay;
