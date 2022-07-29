import { createTheme } from "@mui/material";
import { primaryColor, neutralColor } from "../constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    background: {
      mainGradient: "linear-gradient(to right, tomato, cyan)",
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;
