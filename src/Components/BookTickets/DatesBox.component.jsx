import { Box, styled, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const DatesBoxContainer = styled(Box)(({ theme }) => ({}));
const StyledIcon = styled("svg")(({ theme }) => ({
  fontSize: "40px",
  color: "#999",
  cursor: "pointer",
  "&:hover": {
    color: "#666",
  },
}));

const DatesBox = () => {
  return (
    <DatesBoxContainer
      sx={{ display: "flex", marginLeft: "-12px", padding: "5px 0px" }}
    >
      <StyledIcon as={KeyboardArrowLeftIcon} />
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "row",
          gap: "1px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            padding: "5px",
            backgroundColor: "#f84464",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <Typography variant="body" sx={{ fontSize: "10px" }}>
            SUN
          </Typography>
          <Typography variant="body" sx={{ fontSize: "16px" }}>
            04
          </Typography>
          <Typography variant="body" sx={{ fontSize: "10px" }}>
            JAN
          </Typography>
        </Box>
      </Box>
      <StyledIcon as={KeyboardArrowRightIcon} />
    </DatesBoxContainer>
  );
};

export default DatesBox;
