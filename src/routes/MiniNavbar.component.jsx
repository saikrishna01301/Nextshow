import { Box, Link, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MiniWrapper = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "10px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const MiniNavbar = () => {
  return (
    <MiniWrapper sx={{ backgroundColor: "#f2f2f2" }}>
      <Box sx={{ display: "flex", gap: "25px", color: "#333" }}>
        <Link component={NavLink} to="/movies" underline="none">
          <Typography variant="h5" component="p" color="#333">
            Movies
          </Typography>
        </Link>
        <Link component={NavLink} to="/" underline="none">
          <Typography variant="h5" component="p" color="#333">
            Sports
          </Typography>
        </Link>
        <Link component={NavLink} to="/" underline="none">
          <Typography variant="h5" component="p" color="#333">
            Stream
          </Typography>
        </Link>
        <Link component={NavLink} to="/" underline="none">
          {" "}
          <Typography variant="h5" component="p" color="#333">
            Plays
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "25px" }}>
        <Link component={NavLink} to="/" underline="none">
          <Typography variant="h5" component="p" color="#333">
            ListYourShows
          </Typography>
        </Link>
        <Link component={NavLink} to="/" underline="none">
          <Typography variant="h5" component="p" color="#333">
            Offers
          </Typography>
        </Link>
        <Link component={NavLink} to="/" underline="none">
          <Typography variant="h5" component="p" color="#333">
            Gift Cards
          </Typography>
        </Link>
      </Box>
    </MiniWrapper>
  );
};

export default MiniNavbar;
