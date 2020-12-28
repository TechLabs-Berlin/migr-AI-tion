import React, { useState } from "react";
import axios from "axios";

export default function UploadButton(props) {
  const [state, setState] = useState({ ready: false });
  const [upload, setUpload] = useState({ ready: false });

  function handleUpload(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "#";
    let apiURL = `#`;
    axios.post(apiURL).then(handleImageUpload);
  }

  //function displayImageUpload(response) {
  //setUpload({
  //ready: true,
  //image: response.images.name,
  //});
  //}
  //function handleImageUpload(response) {
  //console.log(response.images);
  //let imageID = "response.images.name";
  //axios.get(imageID).then(displayImageUpload);
  //}

  let uploadButton = (
    <div className="uploadButton">
      <label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleSubmit}
        />
        <button onClick={handleUpload}>+ Upload!</button>
      </label>
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
