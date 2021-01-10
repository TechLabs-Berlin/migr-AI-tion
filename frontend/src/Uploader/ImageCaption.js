import { prependOnceListener } from "npm";
import React from "react";

export default function ImageCaption(props) {
  function handleImageCaption(event) {
    console.log(event.target.value);
    props.enteredCaption(event.target.value);
  }

  return (
    <div className="image-caption">
      <form className="image-caption-form">
        <input
          type="text"
          onChange={handleImageCaption}
          placeholder="Caption your picture"
        />
      </form>
    </div>
  );
}
