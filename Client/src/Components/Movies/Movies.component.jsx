import { styled } from "@mui/material";
import data from "../../assets/movies.json";
import MoviesCard from "./MoviesCard.component";
import { useContext, useEffect, useState } from "react";
import { SearchMovieContext } from "../../Contexts/SearchMovie.context";
import { moviesContext } from "../../Contexts/Movie.context";
const MoviesContainer = styled("div")(({ theme }) => ({
  width: "70%",
  height: "auto",
  margin: "10px auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "17px",
}));

const Movies = () => {
  // Extracting the search term from the SearchMovieContext.
  const { searchMovie } = useContext(SearchMovieContext);
  // Extracting movies data and its setter function from the moviesContext.
  const { movies, setMovies } = useContext(moviesContext);

  // Local state to hold the filtered list of movies based on the search term.
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Effect to update the filtered movies list whenever the search term changes.
  useEffect(() => {
    // If the search term is not empty, filter the movies based on the search term.
    if (searchMovie.length > 0) {
      const filtered = movies.filter(
        (movie) =>
          movie.title
            .toLowerCase() // Convert the movie title to lowercase for case-insensitive matching.
            .includes(searchMovie.toLowerCase()) // Check if the search term is part of the movie title.
      );
      setFilteredMovies(filtered); // Update the filteredMovies state with the matching movies.
    } else {
      // If the search term is empty, reset the filteredMovies to show all movies.
      setFilteredMovies(movies);
    }
  }, [searchMovie]); // Dependency array to re-run the effect whenever the searchMovie changes.

  return (
    <MoviesContainer>
      {filteredMovies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </MoviesContainer>
  );
};
export default Movies;
