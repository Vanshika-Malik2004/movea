import React from "react";
import "./mainPage.css";
import { BsArrowRight } from "react-icons/bs";
const LandingPage = () => {
  return (
    <div className="main_container">
      <nav className="navbar">
        <div className="title">MOVEA</div>
        <div clasName="SignIn">Sign In</div>
      </nav>
      <div className="heading">
        <h1>
          Discover Movie Magic with Movea.Your Ultimate Entertainment
          Destination
        </h1>
      </div>
      <div className="content">
        Wwhether you're a fan ofheart-pounding action, gripping thrillers,
        heartwarming romances, mind-blowing sci-fi, or thought-provoking dramas,
        Movea has got you covered.
      </div>
      <button className="start_btn">
        <span> Get Started</span>
        <BsArrowRight className="right_arrow" />
      </button>
      <div className="gradient_container"></div>
    </div>
  );
};

export default LandingPage;
