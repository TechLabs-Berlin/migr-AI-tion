import React, { useState } from "react";
import UploadGallery from "./UploadGallery";
import UploadCamera from "./UploadCamera";

export default function UploadButton(props) {
  const [state, setState] = useState({ ready: false });

  class showUploadOptions {
    constructor(event) {
      setState = true;
    }
  }

  uploadButton = (
    <div className="uploadButton">
      <button onClick={showUploadOptions}>+ Upload!</button>
    </div>
  );

  if (ready) {
    return (
      <div>
        <UploadGallery />
        <UploadCamera />
      </div>
    );
  } else {
    return null;
  }
}
