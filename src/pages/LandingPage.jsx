import { BsArrowRight } from "react-icons/bs";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="main_container">
      <Navbar />
      <div className="heading">
        <h1>
          Discover Movie Magic with Movea.Your Ultimate Entertainment
          Destination
        </h1>
      </div>
      <div className="content">
        Wwhether you&apos;re a fan ofheart-pounding action, gripping thrillers,
        heartwarming romances, mind-blowing sci-fi, or thought-provoking dramas,
        Movea has got you covered.
      </div>
      <button className="start_btn">
        <span>Get Started</span>
        <BsArrowRight className="right_arrow" />
      </button>
      <div className="gradient_container" />
    </div>
  );
};

export default LandingPage;
