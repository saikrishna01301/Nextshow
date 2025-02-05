import {
  createTheme,
  Menu,
  MenuItem,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { userMovieContext } from "../../../Contexts/UserMovie.context";
import { useContext } from "react";

const Dropdown = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "170px",
    boxShadow: "0 2px 4px 0 rgba(39,41,43,.15)",
    transition: "0.3s ease",
  },
}));

// Create a theme with ripple disabled for all MenuItem components
const theme = createTheme({
  components: {
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true, // Disable ripple for all MenuItem components
      },
    },
  },
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#666",
  fontSize: "14px",
  background: "transparent",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(0, 0, 0, 0.14)",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
}));

const FilterDropdown = ({ anchorEl, open, handleClose }) => {
  const { userMovie, setUserMovie } = useContext(userMovieContext);
  const movie = userMovie;

  //flatmap
  const flattenedFormat = Object.entries(movie.language_format).flatMap(
    ([language, formats]) => {
      return formats.map((format) => `${language}-${format}`);
    }
  );

  const onMenuItemClickHandler = (new_format) => {
    const [language, format] = new_format.split("-");
    setUserMovie((prev) => {
      return { ...prev, selected_language: language, selected_format: format };
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dropdown
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {flattenedFormat.map((item, index) => (
          <StyledMenuItem
            key={index}
            onClick={() => {
              onMenuItemClickHandler(item);
            }}
          >
            {item}
          </StyledMenuItem>
        ))}
      </Dropdown>
    </ThemeProvider>
  );
};
export default FilterDropdown;
