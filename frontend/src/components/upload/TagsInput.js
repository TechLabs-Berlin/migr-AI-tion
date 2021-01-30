import React from "react";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import "./TagsInput.css";
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
export default function TagsInput(props) {
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <div>
        {tags.map((tag, index) => (
          <Chip
            className="tags-chip"
            style={{ marginTop: "20px", marginRight: "5px" }}
            key={index}
            label={tag}
            onDelete={() => removeTags(index)}
            variant="outlined"
          />
        ))}
      </div>
      <br />
      <ThemeProvider theme={theme}>
        <TextField
          className="input-form"
          id="tags-input-form"
          name="tags-input-form"
          label="Tag(s)"
          variant="outlined"
          palette="primary"
          onKeyDown={(event) => addTags(event)}
          placeholder="Press enter to add a tag"
          fullWidth
        ></TextField>
      </ThemeProvider>
    </div>
  );
}
