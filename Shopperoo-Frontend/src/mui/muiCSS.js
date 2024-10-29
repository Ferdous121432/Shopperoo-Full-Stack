import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  customButton: {
    backgroundColor: "#065f46",
    color: "red",
    "&:hover": {
      backgroundColor: "#14532d",
    },
  },
  "MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected": {
    backgroundColor: "#065f46",
  },
});
