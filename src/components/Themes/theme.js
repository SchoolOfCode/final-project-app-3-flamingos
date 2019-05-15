import { createMuiTheme } from "material-ui/styles";
// import white from "material-ui/colors/white";

export default createMuiTheme({
  palette: {
    borderColor: "white"
  },
  overrides: {
    TextField: {
      OutlinedInput: "#ffff"
    }
  }
});
