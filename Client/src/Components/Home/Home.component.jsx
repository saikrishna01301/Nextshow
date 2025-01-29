import { Box, styled, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import { moviesContext } from "../../Contexts/Movie.context";
import MoviesCard from "../Movies/MoviesCard.component";
import Sidebar from "../Sidebar/Sidebar.component";
import { useNavigate } from "react-router-dom";
const HomeWrapper = styled(Box)((theme) => ({
  width: "70%",
  margin: "0px auto",
}));
const RecommendWrapper = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Home = () => {
  const { movies } = useContext(moviesContext);
  const navigate = useNavigate();

  const movieList = movies.sort(() => 0.5 - Math.random()).slice(0, 4);
  const onSeeAllClickHandler = () => {
    navigate("/movies");
  };

  return (
    <>
      <HomeWrapper>
        <RecommendWrapper>
          <Typography variant="h6" sx={{ fontSize: "24px" }}>
            Recommended Movies
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", color: "#f84464" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={onSeeAllClickHandler}
            >
              See All
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: "10px" }} />
          </Box>
        </RecommendWrapper>
        {movieList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </HomeWrapper>
    </>
  );
};

export default Home;
