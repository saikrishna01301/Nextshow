import { useLocation } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MarginOutlined } from "@mui/icons-material";
import DatesBox from "./DatesBox.component";
import MovieDetails from "./MovieDetails.component";
import ShowTime from "./ShowTime.component";
import { userMovieContext } from "../../Contexts/UserMovie.context";
import { useContext } from "react";
import TicketFilters from "./TicketFilters.component";

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
        <TicketFilters />
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
