import { Box, styled, Typography } from "@mui/material";
import { userMovieContext } from "../../Contexts/UserMovie.context";
import { useContext, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterDropdown from "./FilterDropdown/FilterDropdown.component";

const Filter = styled(Typography)(({ theme }) => ({
  width: "170px",
  fontSize: "16px",
  borderLeft: "1px solid #d0d5e6",
  padding: "15px",
  alignSelf: "stretch",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "15px",
}));

const TicketFilters = () => {
  const { userMovie, setUserMovie } = useContext(userMovieContext);
  const movie = userMovie;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "50%",
          position: "relative",
        }}
      >
        <Filter variant="body" onClick={handleClick}>
          {movie.selected_language}-{movie.selected_format}
          <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
        </Filter>
        <FilterDropdown
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
        <Filter variant="body" onClick={handleClick}>
          {movie.selected_language}-{movie.selected_format}
          <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
        </Filter>
        <FilterDropdown
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
        <Filter variant="body" onClick={handleClick}>
          {movie.selected_language}-{movie.selected_format}
          <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
        </Filter>
        <FilterDropdown
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
};
export default TicketFilters;
