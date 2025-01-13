import { Box, styled, Typography } from "@mui/material";
import { Circle, ClosedCaption } from "@mui/icons-material";
import VenueList from "./VenueList.component";

const AttributesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end ",
  gap: "20px",
  padding: "10px 16px",
  borderBottom: "1px solid #f2f2f2",
}));
const Attributes = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "#717171",
}));
const ShowtimeIcon = styled("svg")(({ theme }) => ({
  fontSize: "10px",
  marginTop: "-2px",
}));

const ShowTime = () => {
  return (
    <Box sx={{ width: "70%", margin: "0px auto", backgroundColor: "#fff" }}>
      <AttributesWrapper>
        <Attributes variant="body">
          <ShowtimeIcon sx={{ color: "#4abd5d" }} as={Circle} />
          <span>available</span>
        </Attributes>
        <Attributes variant="body">
          <ShowtimeIcon sx={{ color: "#f60" }} as={Circle} />
          <span>fast filling</span>
        </Attributes>
        <Attributes variant="body">
          <ShowtimeIcon sx={{ color: "#4abd5d" }} as={ClosedCaption} />
          <span>subtitles languages</span>
        </Attributes>
      </AttributesWrapper>
      <VenueList />
      <VenueList />
      <VenueList />
      <VenueList />
    </Box>
  );
};
export default ShowTime;
