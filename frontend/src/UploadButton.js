import React, { useState } from "react";
import axios from "axios";

export default function Uploader(props) {
  const [upload, setUpload] = useState({ ready: false });

  function displayImageUpload(response) {
    setUpload({
      ready: true,
      image: response.images.name,
    });
  }
  function handleImageUpload(response) {
    console.log(response.images);
    let imageID = "response.images.name";
    axios.get(imageID).then(displayImageUpload);
  }

  function handleUploadSubmit(event) {
    event.preventDefault();
    let apiKey = "";
    let apiURL = ``;
    axios.post(apiURL).then(handleImageUpload);
  }

  function handleUpload(event) {
  event.preventDefault();
  
  }
  let uploadButton = (
    <div className="button">
      <button onClick={handleUploadSubmit}>+ Upload!</button>
    </div>
  );

  if (ready) {
    return (
      <div>
        <Display img={props.images.name} />
        {uploadButton}
      </div>
    );
  } else {
    return uploadButton;
  }
}
