/* Customizing the Theme (Optional)
You can customize the Material-UI theme to match your design requirements. Here’s how to create a custom theme: */

import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default theme;
