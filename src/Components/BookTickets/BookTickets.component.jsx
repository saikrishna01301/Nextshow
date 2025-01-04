import { useLocation } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const MovieDetails = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "0px auto",
  padding: "25px 0px",
}));

const StyledIcon = styled("svg")(({ theme }) => ({
  width: "40px",
  height: "40px",
  color: "#999",
  cursor: "pointer",
  "&:hover": {
    color: "#666",
  },
}));

const DatesBox = styled(Box)(({ theme }) => ({}));

const BookTickets = () => {
  const location = useLocation();
  const movie = location.state;
  console.log(movie);

  return (
    <>
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
      <Box sx={{ width: "70%", margin: "0px auto" }}>
        <DatesBox sx={{ display: "flex" }}>
          <StyledIcon as={KeyboardArrowLeftIcon} />
          <Box
            sx={{
              width: "250px",
              display: "flex",
              flexDirection: "row",
              gap: "1git px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                padding: "5px",
                backgroundColor: "#f84464",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                SUN
              </Typography>
              <Typography variant="body" sx={{ fontSize: "16px" }}>
                04
              </Typography>
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                JAN
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                padding: "5px",
                backgroundColor: "#f84464",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                SUN
              </Typography>
              <Typography variant="body" sx={{ fontSize: "16px" }}>
                04
              </Typography>
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                JAN
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                padding: "5px",
                backgroundColor: "#f84464",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                SUN
              </Typography>
              <Typography variant="body" sx={{ fontSize: "16px" }}>
                04
              </Typography>
              <Typography variant="body" sx={{ fontSize: "10px" }}>
                JAN
              </Typography>
            </Box>
          </Box>
          <StyledIcon as={KeyboardArrowRightIcon} />
        </DatesBox>
        <Box></Box>
      </Box>
    </>
  );
};
export default BookTickets;
