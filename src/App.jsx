import RouterLayout from "./RouterStruct";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import RouterStruct from "./RouterStruct";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterStruct />} path="/">
      <Route index element={<LandingPage />} />
      <Route exact path="/mainpage" element={<MainPage />} />
      <Route path="/moviedetails/:id" element={<MovieDetailsPage />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
