import {
  AppBar,
  Typography,
  Link,
  InputBase,
  Button,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, ExpandMore } from "@mui/icons-material";
import MiniNavbar from "../../routes/MiniNavbar.component";
import Dialog from "../Dialogs/Dialog.component";
import {
  StyledToolbar,
  Search,
  SearchIconWrapper,
  StyledBox,
  LocationSelection,
} from "./Navbar.styled";
import { SearchMovieContext } from "../../Contexts/SearchMovie.context";
import { useContext, useState } from "react";
import SignIn from "../Auth/SignIn.component";
import Sidebar from "../Sidebar/Sidebar.component";
import EmailPassword from "../Auth/EmailPassword.component";

const Navbar = () => {
  const { setSearchMovie } = useContext(SearchMovieContext);
  const onChangeHandler = (e) => {
    setSearchMovie(e.target.value);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [openEmailPassword, setOpenEmailPassword] = useState(false);
  // const [toggleDialog, setToggleDialog] = useState(handleDialog);

  const handleDialog = () => {
    setOpenDialog(true);
    // setOpenEmailPassword(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleEmailPasswordClose = (e) => {
    e.preventDefault();
    setOpenEmailPassword(false);
    setOpenDialog(true);
  };
  const handleEmailPasswordOpen = (e) => {
    e.preventDefault();
    setOpenEmailPassword(true);
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog />
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
              onClick={handleDialog}
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
      <SignIn
        open={openDialog}
        handleClose={handleDialogClose}
        handleEmailPasswordOpen={handleEmailPasswordOpen}
        openEmailPassword
      />
      <EmailPassword
        open={openEmailPassword}
        handleClose={handleEmailPasswordClose}
      ></EmailPassword>
      <Sidebar />
    </>
  );
};

export default Navbar;
