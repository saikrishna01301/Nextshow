import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./routes/Navbar.component";
import MoviesRoute from "./routes/Movies.route";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="movies" element={<MoviesRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
