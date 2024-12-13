import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  styled,
  InputBase,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { Menu, ExpandMore } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: "70px",
  width: "70%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "50%",
  width: "35%",
  padding: "5px",
  border: "2px solid #eeeeee",
  borderRadius: "4px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "18px",
}));

const LocationSelection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
      <StyledToolbar>
        <Link component={NavLink} to="/" underline="none">
          <Typography
            color="#333"
            sx={{
              display: { xs: "none", sm: "block", fontSize: "24px" },
            }}
          >
            NextShow
          </Typography>
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#333", width: "24px", height: "24px" }} />
          </SearchIconWrapper>
          <InputBase
            placeholder="Search for movies and sports..."
            sx={{ width: "100%", fontSize: "14px", marginLeft: "10px" }}
          />
        </Search>
        <StyledBox>
          <LocationSelection>
            <Typography variant="h6" sx={{ color: "#333", fontSize: "16px" }}>
              NewYork
            </Typography>
            <ExpandMore sx={{ color: "#333", width: "24px", height: "24px" }} />
          </LocationSelection>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f84464",
              fontSize: "12px",
              padding: "3px",
              display: { xs: "none", sm: "block" },
            }}
          >
            SignIn
          </Button>
          <Menu
            sx={{
              color: "#333",
              width: "28px",
              height: "28px",
              cursor: "pointer",
            }}
          />
        </StyledBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
