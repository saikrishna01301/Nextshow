import {
  Box,
  Button,
  CardMedia,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Cast from "../Cast/Cast.component";
import { useState, useContext } from "react";
import TicketDialog from "../BookTickets/TicketDialog.component";
import { userMovieContext } from "../../Contexts/UserMovie.context";

//styled themes section
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
//styled themes section end

// Movie component starts here
const Movie = () => {
  // const location = useLocation();
  // const movie = location.state;
  const { userMovie, setUserMovie } = useContext(userMovieContext);
  const movie = userMovie;

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const bookTickets = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormatClick = ({ language, format }) => {
    // redirect to book tickets page
    console.log(format);
    setUserMovie((prev) => {
      return { ...prev, selected_language: language, selected_format: format };
    });
    // navigate("/book-tickets", { state: { ...movie, language_format: format } }); // redirect to book tickets page
    handleClose();
    navigate("/book-tickets");
  };

  return (
    <>
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
                onClick={bookTickets}
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
          <Typography
            variant="body"
            sx={{ fontSize: "16px", color: "#333333" }}
          >
            {movie.extract}
          </Typography>
          <Divider sx={{ margin: "20px 0" }} />
          <Cast cast={movie.cast} />
        </AboutMovie>
      </MovieContainer>
      <TicketDialog
        movie={movie}
        open={open}
        handleClose={handleClose}
        handleFormatClick={handleFormatClick}
      />
    </>
  );
};
export default Movie;
