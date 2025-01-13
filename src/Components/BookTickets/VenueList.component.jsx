import { Favorite, FavoriteBorder } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Checkbox, IconButton, styled, Typography } from "@mui/material";
const VenueListWrapper = styled(Box)((theme) => ({
  display: "flex",
  padding: "15px",
  borderBottom: "1px solid #f2f2f2",
}));
const List = styled(Box)((theme) => ({
  width: "28%",
  display: "flex",
  alignItems: "",
}));
const ListItem = styled(Box)((theme) => ({
  width: "100%",
  paddingLeft: "5px",
  paddingRight: "20px",
  display: "flex",
  flexDirection: "column",
}));
const Heart = styled("svg")((theme) => ({}));

const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
}));

const ShowtimePillWrapper = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));
const ShowTimePill = styled(Box)(({ theme }) => ({
  display: "flex",
  minWidth: "120px",
  height: "40px",
  fontSize: "12px",
  padding: "5px",
  border: "1px solid #999",
  borderRadius: "5px",
  color: "#4abd5d",
}));

const VenueList = () => {
  return (
    <VenueListWrapper>
      <List>
        <IconButton
          disableRipple
          sx={{ marginTop: "-30px" }}
          aria-label="add to favorites"
        >
          <Checkbox
            disableRipple
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
            sx={{
              padding: 0, // Removes extra padding
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          />
        </IconButton>
        <ListItem>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ItemText sx={{ fontWeight: "bold", cursor: "pointer" }}>
              Amc: Newport Center
            </ItemText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#727272",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <InfoOutlinedIcon />
              <ItemText>info</ItemText>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",

              gap: "10px",
              marginTop: "10px",
            }}
          >
            <ItemText
              sx={{ color: "#49ba8e", display: "flex", alignItems: "center" }}
            >
              <PhoneIphoneIcon sx={{ marginRight: "5px" }} />
              Online
            </ItemText>
            <ItemText
              sx={{ color: "#ffa426", display: "flex", alignItems: "center" }}
            >
              <FastfoodOutlinedIcon sx={{ marginRight: "5px" }} />
              Food&Beverage
            </ItemText>
          </Box>
        </ListItem>
      </List>
      <ShowtimePillWrapper>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <ShowTimePill>
            <Typography sx={{ fontSize: "12px", margin: "auto" }}>
              9:45PM
            </Typography>
          </ShowTimePill>
          <ShowTimePill>
            <Typography sx={{ fontSize: "12px", margin: "auto" }}>
              9:45PM
            </Typography>
          </ShowTimePill>
          <ShowTimePill>
            <Typography sx={{ fontSize: "12px", margin: "auto" }}>
              9:45PM
            </Typography>
          </ShowTimePill>
          <ShowTimePill>
            <Typography sx={{ fontSize: "12px", margin: "auto" }}>
              9:45PM
            </Typography>
          </ShowTimePill>
        </Box>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            marginLeft: "5px",
          }}
        >
          <CircleIcon sx={{ fontSize: "10px", color: "#ffc610" }} />
          <span>Cancellation available</span>
        </Typography>
      </ShowtimePillWrapper>
    </VenueListWrapper>
  );
};
export default VenueList;
