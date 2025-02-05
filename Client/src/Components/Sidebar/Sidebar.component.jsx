import {
  ContactSupportOutlined,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Portrait,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  position: "absolute",
  top: 0,
  right: "-350px",
  height: "100vh",
  width: "350px",
  padding: 0,
  zIndex: 100,
  transition: "right 0.3s ease",
  "&.active": { right: "0" },
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  "& .MuiSvgIcon-root ": {
    fontSize: "20px",
  },
  "& .MuiListItemText-primary": {
    fontSize: "16px",
  },
}));
const Sidebar = ({ active }) => {
  console.log(active);
  return (
    <SidebarContainer
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      className={active ? "active" : ""}
    >
      <Box>
        <Box sx={{ padding: "15px" }}>
          <Typography sx={{ fontSize: "24px", color: "#333" }}>
            Hello! <br /> Welcome back Sai Krishna
          </Typography>
        </Box>
        <Divider />
        <StyledList>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Your Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
              <ListItemIcon>
                <ContactSupportOutlined />
              </ListItemIcon>
              <ListItemText primary="Contact Support" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#switch">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch></Switch>
            </ListItemButton>
          </ListItem>
        </StyledList>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
