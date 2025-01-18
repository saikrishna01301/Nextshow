import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.component";
import MoviesRoute from "./routes/Movies.route";
import Movie from "./Components/Movies/Movie.component";
import BookTickets from "./Components/BookTickets/BookTickets.component";
import TicketDialog from "./Components/BookTickets/TicketDialog.component";
import Home from "./Components/Home/Home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesRoute />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="book-tickets" element={<BookTickets />}></Route>
        <Route path="/book-tickets-dialog" element={<TicketDialog />} />
      </Route>
    </Routes>
  );
}

export default App;
