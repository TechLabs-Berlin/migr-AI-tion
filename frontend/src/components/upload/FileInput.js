import React, { useRef } from "react";

export default function UploadForm(props) {
  const [src, setSrc] = React.useState(null);
  const fileInput = useRef(null);

  const handleImageSelection = event => {
    props.selectedImage(event.target.files[0]);

    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      setSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const openFileInput = () => {
    fileInput.current?.click();
  };

  return (
    <div
      style={{ width: "100%", height: "200px", border: "2px solid black" }}
      onClick={openFileInput}
    >
      <img style={{ height: "100%" }} className="loaded-image" src={src} />

      <label>
        <input
          ref={fileInput}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleImageSelection}
        />
      </label>
    </div>
  );
}
