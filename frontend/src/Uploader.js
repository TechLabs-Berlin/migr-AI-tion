import React from "react";
import axios from "axios";

export default function Upload() {
  const [image, setImage] = React.useState(null);
  const [src, setSrc] = React.useState(null);

  const handleImageChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const uploadImage = () => {
    let formData = new FormData();
    formData.append("file", image);
    axios.post("http://localhost:8000/images", formData).then((response) => {
      setSrc(`http://localhost:8000/images/${response.data.id}.jpeg`);
    });
  };

  return (
    <div className="Button">
      <label>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
        />
      </label>
      <button onClick={uploadImage}> Upload </button>
      <img src={src} alt="img" />
    </div>
  );
}
