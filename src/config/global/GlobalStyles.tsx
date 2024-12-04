import { GlobalStyles } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { themeColors } from "./themeColors";

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },
  body: {
    backgroundColor: themeColors.background,
    color: themeColors.text,
  },
  a: {
    textDecoration: "none",
    color: themeColors.primary,
  },
  button: {
    fontFamily: "Poppins, sans-serif",
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
