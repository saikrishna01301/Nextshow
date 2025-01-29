import { Dialog } from "@mui/material";

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
      {children}
    </Dialog>
  );
};

export default DefaultDialog;
