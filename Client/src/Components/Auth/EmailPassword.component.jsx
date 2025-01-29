import {
  Box,
  Button,
  DialogTitle,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "../Dialogs/Dialog.component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AccountCircle, Password } from "@mui/icons-material";
import ButtonPrimary from "../Button/ButtonPrimary.component";
import { fontGrid } from "@mui/material/styles/cssUtils";
import { useState } from "react";
const EmailPassword = ({ open, handleClose }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target; // Destructuring the event object
    setLoginData({ ...loginData, [name]: value }); // Updating the state
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoginData({ email: "", password: "" });
  };
  return (
    <Dialog open={open} handleClose={handleClose}>
      <DialogTitle>
        <ArrowBackIosIcon
          sx={{ marginLeft: "-35px", fontSize: "18px", cursor: "pointer" }}
          onClick={handleClose}
        />
      </DialogTitle>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "15px",
          gap: "12px",
        }}
      >
        <Typography sx={{ fontSize: "21px" }}>
          Login with Email and Password
        </Typography>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <InputLabel sx={{ fontSize: "16px" }} htmlFor="email">
            Email
          </InputLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            value={loginData.email}
            required
            onChange={onChangeHandler}
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "12px", // Changes the input text font size
                "& fieldset": {
                  borderColor: "#ccc", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#ccc", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ccc", // Border color when focused (selected)
                },
              },
            }}
          ></TextField>
          <InputLabel htmlFor="password" sx={{ fontSize: "16px" }}>
            Password
          </InputLabel>
          <TextField
            name="password"
            id="password"
            value={loginData.password}
            type="password"
            required
            onChange={onChangeHandler}
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "12px", // Changes the input text font size
                "& fieldset": {
                  borderColor: "#ccc", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#ccc", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Border color when focused (selected)
                },
              },
            }}
          ></TextField>

          <ButtonPrimary type={"submit"} sx={{ fontSize: "16px" }}>
            Login
          </ButtonPrimary>
        </form>
      </Box>
    </Dialog>
  );
};

export default EmailPassword;
