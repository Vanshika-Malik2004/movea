import React from "react";
import "./mainPage.css";
const LandingPage = () => {
  return (
    <div className="main_container">
      <nav className="navbar">
        <div className="title">MOVEA</div>
        <div clasName="SignIn">Sign In</div>
      </nav>
      <div className="heading">
        <div className="line line1">Watch Your</div>
        <div className="line line2">Favourite Movies</div>
        <div className="line line3">
          With <span className="movea_style">MOVEA</span>
        </div>
      </div>
      <div className="content">
        Wwhether you're a fan ofheart-pounding action, gripping thrillers,
        heartwarming romances, mind-blowing sci-fi, or thought-provoking dramas,
        Movea has got you covered.
      </div>
      <button>
        <span className="btn">Get Started</span>
      </button>
    </div>
  );
};

export default LandingPage;
