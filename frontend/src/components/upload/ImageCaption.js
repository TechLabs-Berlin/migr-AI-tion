import React from "react";
import TextField from "@material-ui/core/TextField";
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

export default function ImageCaption(props) {
  function handleImageCaption(event) {
    props.enteredCaption(event.target.value);
  }

  return (
    <div className="image-caption">
      <ThemeProvider theme={theme}>
        <TextField
          id="image-caption-input"
          name="image-caption-input"
          label="Description"
          variant="outlined"
          onChange={handleImageCaption}
          placeholder="Caption your picture"
          fullWidth
        />
      </ThemeProvider>
    </div>
  );
}
