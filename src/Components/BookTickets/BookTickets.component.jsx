import { useLocation } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MarginOutlined } from "@mui/icons-material";
import DatesBox from "./DatesBox.component";
import MovieDetails from "./MovieDetails.component";
import ShowTime from "./ShowTime.component";
import { userMovieContext } from "../../Contexts/UserMovie.context";
import { useContext } from "react";

const Filter = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  borderLeft: "1px solid #d0d5e6",
  padding: "15px",
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
}));

const BookTickets = () => {
  // const location = useLocation();
  // const movie = location.state;
  const { userMovie, setUserMovie } = useContext(userMovieContext);
  const movie = userMovie;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box sx={{ borderBottom: "1px solid #d0d5e6" }}>
        <MovieDetails />
      </Box>
      <Box
        sx={{
          width: "70%",
          margin: "0px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DatesBox />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <Filter variant="body">
            {movie.selected_language}-{movie.selected_format}
            <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
          </Filter>
          <Filter variant="body">
            {movie.selected_language}-{movie.selected_format}
            <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
          </Filter>
          <Filter variant="body" sx={{ paddingRight: "0px" }}>
            {movie.selected_language}-{movie.selected_format}
            <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
          </Filter>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f2f2f2",
          padding: "10px 0px",
        }}
      >
        <ShowTime />
      </Box>
    </Box>
  );
};
export default BookTickets;
