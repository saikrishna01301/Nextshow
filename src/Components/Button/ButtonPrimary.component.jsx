import { Button } from "@mui/material";

const ButtonPrimary = ({ children, sx, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#f84464",
        color: "#fff",
        fontSize: "12px",
        padding: "5px",
        marginTop: "10px",
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
