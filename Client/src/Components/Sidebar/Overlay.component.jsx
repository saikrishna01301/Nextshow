import { Box, styled } from "@mui/material";

const StyledOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
  zIndex: 7, // Just below the sidebar
  display: "none", // Hidden by default
  transition: "0.3s ease",
  "&.active": {
    display: "block", // Show overlay when sidebar is active
  },
}));
const Overlay = ({ active, closeSidebar }) => {
  return (
    <StyledOverlay className={active ? "active" : ""} onClick={closeSidebar} />
  );
};
export default Overlay;
