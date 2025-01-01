import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.component";
import MoviesRoute from "./routes/Movies.route";
import Movie from "./Components/Movies/Movie.component";
import { useState } from "react";

function App() {
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navbar setSearchMovie={setSearchMovie} />}>
        <Route
          path="movies"
          element={<MoviesRoute searchMovie={searchMovie} />}
        />
        <Route path="movie/:id" element={<Movie />} />
        <Route
          index
          element={<MoviesRoute searchMovie={searchMovie} />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
