import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8C3850",
    },
    secondary: {
      main: "#46436E",
    },
    error: {
      main: amber.A700,
    },
    background: {
      default: "#fff",
    },
  },
});
export default responsiveFontSizes(theme);
