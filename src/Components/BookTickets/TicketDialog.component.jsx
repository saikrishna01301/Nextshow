import { DisplaySettings } from "@mui/icons-material";
// import Dialog from "../Dialogs/Dialog.component";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TicketDialog = ({
  movie,
  open,
  handleClose,
  handleFormatClick,
  bookTickets,
}) => {
  const Format = styled(Typography)(({ theme }) => ({
    marginRight: "8px",
    fontSize: "14px",
    cursor: "pointer",
    border: "1px solid #cccccc",
    padding: "8px 12px",
    color: "#f84464",
    borderRadius: "16px",
  }));

  const FormatWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  }));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "20%", // Set width of the dialog to 90% of the screen width
          height: "30%",
          maxWidth: "none", // Prevent it from being constrained to a max width
        },
      }}
    >
      <DialogTitle>
        <Box>
          <Typography sx={{ fontSize: "12px" }}>{movie.title}</Typography>
        </Box>
        <Typography sx={{ fontSize: "18px" }}>
          Select language and format
        </Typography>
      </DialogTitle>
      <DialogContent>
        {Object.entries(movie.language_format).map(([language, formats]) => {
          console.log(language);
          console.log(typeof formats, formats);
          return (
            <Box sx={{ marginBottom: "15px" }}>
              <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                {language}
              </Typography>
              <FormatWrapper>
                {formats.map((format, index) => {
                  return (
                    <Format
                      variant="body"
                      key={index}
                      onClick={() => handleFormatClick({ language, format })}
                    >
                      {format}
                    </Format>
                  );
                })}
              </FormatWrapper>
            </Box>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

export default TicketDialog;
