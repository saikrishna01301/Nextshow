import {
  Box,
  Button,
  CardMedia,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Cast from "../Cast/Cast.component";

const MovieContainer = styled(Box)(({ theme }) => ({}));

const ContainerMainRight = styled(Box)(({ theme }) => ({}));
const ContainerMainLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "50px",
  width: "70%",
  margin: "0 auto",
  color: "#fff",
  padding: "50px 0",
}));

const Background = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 5px",
  color: "#111",
  borderRadius: "2px",
}));

const ContainerMain = styled(Box)(({ theme }) => ({
  backgroundColor: "#111",
}));

const AboutMovie = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "20px auto",
  // marginTop: "20px ",
}));

const Movie = () => {
  const location = useLocation();
  const movie = location.state;

  return (
    <MovieContainer>
      <ContainerMain>
        <ContainerMainLeft>
          <CardMedia
            sx={{ height: 350, width: 250, borderRadius: "10px" }}
            image={movie.thumbnail}
            title={movie.title}
          />
          <ContainerMainRight sx={{ marginTop: "5%" }}>
            <Typography variant="h2" sx={{ marginBottom: "18px" }}>
              {movie.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginTop: "10px",
                marginBottom: "18px",
              }}
            >
              <Background>
                <Typography sx={{ fontSize: "18px" }}>2D</Typography>
              </Background>
              <Background>
                <Typography sx={{ fontSize: "18px" }}>
                  {movie.genres.join(", ")}
                </Typography>
              </Background>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f84464",
                fontSize: "12px",
                padding: "5px",
                marginTop: "10px",
              }}
            >
              Book tickets
            </Button>
          </ContainerMainRight>
        </ContainerMainLeft>
      </ContainerMain>
      <AboutMovie>
        <Typography variant="h2" sx={{ marginBottom: "6px" }}>
          About the movie
        </Typography>
        <Typography variant="body" sx={{ fontSize: "16px", color: "#333333" }}>
          {movie.extract}
        </Typography>
        <Divider sx={{ margin: "20px 0" }} />
        <Cast cast={movie.cast} />
      </AboutMovie>
    </MovieContainer>
  );
};
export default Movie;
