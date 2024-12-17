import { styled } from "@mui/material";
import data from "../../Server/movies.json";
import MoviesCard from "./MoviesCard.component";

const MoviesContainer = styled("div")(({ theme }) => ({
  width: "70%",
  height: "auto",
  margin: "10px auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const Movies = () => {
  return (
    <MoviesContainer>
      {data.map((movie) => {
        return <MoviesCard key={movie.id} movie={movie} />;
      })}
    </MoviesContainer>
  );
};
export default Movies;
