import React from "react";
import "./ImageCaption.css";

export default function ImageCaption(props) {
  function handleImageCaption(event) {
    console.log(event.target.value);
    props.enteredCaption(event.target.value);
  }

  return (
    <div className="image-caption">
      <label for="image-caption-form">Description</label>
      <form className="image-caption-form">
        <input
          name="image-caption-input"
          type="text"
          onChange={handleImageCaption}
          placeholder="Caption your picture"
        />
      </form>
    </div>
  );
}
