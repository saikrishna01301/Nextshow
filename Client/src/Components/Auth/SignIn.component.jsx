import { useState } from "react";
import DefaultDialog from "../Dialogs/Dialog.component";
import {
  DialogTitle,
  Typography,
  Box,
  Avatar,
  CardMedia,
  Input,
  TextField,
} from "@mui/material";
import America from "../../assets/America.png";
import Google from "../../assets/Google.png";
import { fontSize, styled } from "@mui/system";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CloseIconComponent from "../Dialogs/CloseIcon.component";

const SignInTypesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const TypeWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  border: "1px solid #ebebeb",
  marginBottom: "20px",
  cursor: "pointer",
}));
const SignInType = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "13px 0",
  gap: "20px",
}));
const SignInWithPhoneWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginTop: "30px",
}));

const SignInTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    border: "none",
    padding: "0px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderBottom: "1px solid black", // Custom hover border
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderBottom: "1px solid black", // Custom focus border
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none", // Removes the default border of the outlined TextField
    borderBottom: "1px solid black",
    borderRadius: "0px",
  },
  "& .MuiInputBase-input": {
    padding: "0", // Custom padding for the input text
    fontSize: "14px",
  },
}));

const SignIn = ({ open, handleClose, handleEmailPasswordOpen }) => {
  return (
    <DefaultDialog open={open} handleClose={handleClose}>
      <DialogTitle
        sx={{ fontSize: "16px", padding: "24px 28px", margin: "0px auto" }}
      >
        Get Started
      </DialogTitle>
      <CloseIconComponent handleClose={handleClose} />
      <SignInTypesWrapper>
        <TypeWrapper>
          <SignInType>
            <CardMedia
              component="img"
              image={Google}
              sx={{ width: "18px", height: "18px", marginLeft: "20px" }}
            />
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Continue with Google
            </Typography>
          </SignInType>
        </TypeWrapper>
        <TypeWrapper>
          <SignInType onClick={handleEmailPasswordOpen}>
            <EmailOutlinedIcon sx={{ fontSize: "18px", marginLeft: "20px" }} />
            <Typography variant="h6">
              Continue with Email and Password
            </Typography>
          </SignInType>
        </TypeWrapper>
        <Typography sx={{ fontSize: "12px", color: "rgb(89, 89, 89)" }}>
          OR
        </Typography>
        <SignInWithPhoneWrapper>
          <CardMedia
            component="img"
            image={America}
            sx={{ width: "20px", height: "20px" }}
          />
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            +1
          </Typography>
          <SignInTextField
            variant="outlined"
            type="tel"
            placeholder="Continue with  phone number"
            fullWidth
            inputProps={{
              inputMode: "numeric", // Suggests a numeric keyboard on mobile devices
              pattern: "[0-9]*", // Restricts input to numbers
            }}
          />
        </SignInWithPhoneWrapper>
        <Typography sx={{ marginTop: "60px" }}>
          I agree to the Terms & Conditions & Privacy Policy
        </Typography>
      </SignInTypesWrapper>
    </DefaultDialog>
  );
};
export default SignIn;
