import { AppBar, Typography, Link, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, ExpandMore } from "@mui/icons-material";
import MiniNavbar from "../../routes/MiniNavbar.component";
import {
  StyledToolbar,
  Search,
  SearchIconWrapper,
  StyledBox,
  LocationSelection,
} from "./Navbar.styled";

const Navbar = (props) => {
  const onChangeHandler = (e) => {
    props.setSearchMovie(e.target.value);
  };

  return (
    <>
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
              <SearchIcon
                sx={{ color: "#333", width: "24px", height: "24px" }}
              />
            </SearchIconWrapper>
            <InputBase
              placeholder="Search for movies and sports..."
              sx={{ width: "100%", fontSize: "14px", marginLeft: "10px" }}
              onChange={onChangeHandler}
            />
          </Search>
          <StyledBox>
            <LocationSelection>
              <Typography variant="h6" sx={{ color: "#333", fontSize: "16px" }}>
                NewYork
              </Typography>
              <ExpandMore
                sx={{ color: "#333", width: "24px", height: "24px" }}
              />
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
      <MiniNavbar />
      <Outlet />
    </>
  );
};

export default Navbar;
