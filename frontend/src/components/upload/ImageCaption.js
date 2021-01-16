import React from "react";

import TextField from "@material-ui/core/TextField";

export default function ImageCaption(props) {
  function handleImageCaption(event) {
    props.enteredCaption(event.target.value);
  }

  return (
    <div className="image-caption">
      <TextField
        id="image-caption-input"
        name="image-caption-input"
        label="Description"
        variant="outlined"
        onChange={handleImageCaption}
        placeholder="Caption your picture"
        fullWidth
      />
    </div>
  );
}
