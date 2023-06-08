import LandingPage from "./pages/LandingPage";
import Genres from "./components/Genres";
import movieList from "./components/movieList";
function App() {
  return (
    <div className="app_main_container">
      <Genres />
      <movieList className="movie_list" />
    </div>
    //<LandingPage />
  );
}

export default App;
