import { Box, styled } from "@mui/material";

export const StyledToolbar = styled(Box)(({ theme }) => ({
  height: "70px",
  width: "70%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "50%",
  width: "35%",
  padding: "5px",
  border: "2px solid #eeeeee",
  borderRadius: "4px",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "18px",
}));

export const LocationSelection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
