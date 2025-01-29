import CloseIcon from "@mui/icons-material/Close";
const CloseIconComponent = ({ handleClose }) => {
  return (
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
  );
};

export default CloseIconComponent;
