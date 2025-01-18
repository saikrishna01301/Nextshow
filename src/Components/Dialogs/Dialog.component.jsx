import { DisplaySettings } from "@mui/icons-material";
import { Dialog, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DefaultDialog = ({ open, handleClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          //   marginTop: "-10%",
          width: "30%", // Set width of the dialog to 90% of the screen width
          minHeight: "50%",
          // Prevent it from being constrained to a max width
          padding: "0 42px",
          margin: "0",
        },
      }}
    >
      <CloseIcon
        sx={{
          fontSize: "24px",
          position: "absolute",
          top: "5%",
          right: "5%",
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      {children}
    </Dialog>
  );
};

export default DefaultDialog;
