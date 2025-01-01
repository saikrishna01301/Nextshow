import { styled } from "@mui/material";
import data from "../../Server/movies.json";
import MoviesCard from "./MoviesCard.component";
import { useEffect, useState } from "react";

const MoviesContainer = styled("div")(({ theme }) => ({
  width: "70%",
  height: "auto",
  margin: "10px auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const Movies = ({ searchMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState(data);

  useEffect(() => {
    // Ensure searchMovie is a string
    if (searchMovie.searchMovie.length > 0) {
      const filtered = data.filter((movie) =>
        movie.title
          .toLowerCase()
          .includes(searchMovie.searchMovie.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(data);
    }
  }, [searchMovie]);

  return (
    <MoviesContainer>
      {filteredMovies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </MoviesContainer>
  );
};
export default Movies;
