import { useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
const MovieDetails = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "0px auto",
  padding: "25px 0px",
}));
const BookTickets = () => {
  const location = useLocation();
  const movie = location.state;
  console.log(movie);

  return (
    <Box sx={{ borderBottom: "1px solid #d0d5e6" }}>
      <MovieDetails>
        <Typography
          variant="h3"
          sx={{ fontSize: "36px", color: "#333", fontWeight: "400" }}
        >
          {movie.title} - {movie.language_format.language}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10",
          }}
        >
          {movie.genres.map((genre, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  marginRight: "10px",
                  color: "#666",
                  border: "1px solid #666",
                  fontSize: "10px",
                  padding: "2px 8px",
                  textTransform: "uppercase",
                  borderRadius: "50px",
                }}
              >
                {genre}
              </Typography>
            );
          })}
        </Box>
      </MovieDetails>
    </Box>
  );
};
export default BookTickets;
