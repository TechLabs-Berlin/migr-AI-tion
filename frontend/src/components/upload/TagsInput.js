import React from "react";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

export default function TagsInput(props) {
  const [tags, setTags] = React.useState([]);
  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <TextField
        id="tags-input-form"
        name="tags-input-form"
        label="Tag(s)"
        variant="outlined"
        onKeyDown={event => addTags(event)}
        placeholder="Press enter to add a tag"
        fullWidth
      ></TextField>
      <div>
        {tags.map((tag, index) => (
          <Chip
            style={{ marginTop: "20px", marginRight: "5px" }}
            key={index}
            label={tag}
            onDelete={() => removeTags(index)}
            variant="outlined"
          />
        ))}
      </div>
    </div>
  );
}
