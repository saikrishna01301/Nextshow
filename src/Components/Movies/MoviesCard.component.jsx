import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(
      `/movie/${movie.title.trim().replace(/\s+/g, "-").toLowerCase()}`,
      {
        state: movie,
      }
    );
  };

  return (
    <Card
      sx={{
        shadow: "none",
        backgroundColor: "#f5f5f5",
        marginBottom: "30px",
        cursor: "pointer",
        width: "256px",
        border: "none",
        boxShadow: "none",
      }}
      onClick={goToMovie}
    >
      <CardMedia
        sx={{ height: 378, width: 256, borderRadius: "10px" }}
        image={movie.thumbnail}
        title={movie.title}
      />
      <Box sx={{ padding: "5px 10px" }}>
        <Typography variant="h4" sx={{ fontSize: "18px", marginTop: "10px" }}>
          {movie.title}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px", color: "#666666" }}>
          {movie.genres.join(", ")}
        </Typography>
      </Box>
    </Card>
  );
};

export default MoviesCard;
