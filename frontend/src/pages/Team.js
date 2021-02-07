import React from "react";
import { Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9611ff",
    },
    secondary: {
      main: "#668389",
    },
  },
});

export default function Team() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography color="primary">About the Team</Typography>
      </ThemeProvider>
    </div>
  );
}
