import React from "react";
import axios from "axios";
import TagsInput from "./TagsInput";
import ImageCaption from "./ImageCaption";
import CircularProgressWithLabel from "./ProgressIcon";

export default function UploadForm() {
  const [image, setImage] = React.useState(null);
  const [src, setSrc] = React.useState(null);
  const [tags, setTags] = React.useState(null);
  const [caption, setCaption] = React.useState(null);
  const [progress, setProgress] = React.useState(10);

  const enteredCaption = (props) => {
    console.log(caption);
    setCaption(props.event.target.value);
  };
  const selectedTags = (tags) => {
    console.log(tags);
    setTags(...tags);
  };

  const handleImageSelection = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  function handleSave() {
    preventdefault();
    if (!progress) {
      setProgress(true);
      return (files = [image, tags, caption]);
    }
  }

  function postData() {
    preventdefault();
    let formData = new FormData();
    formData.append("file", files);
    axios.post("http://localhost:8000/images", formData).then((response) => {
      setSrc(`http://localhost:8000/images/${response.data.id}.jpeg`);
    });
  }

  postData();

  return (
    <div className="SaveForm">
      <label>
        <input type="file" accept="image/*" onChange={handleImageSelection} />
      </label>

      <img src={src} alt="img" />
      <TagsInput selectedTags={selectedTags} />
      <ImageCaption enteredCaption={enteredCaption} />
      <container>
        <div className="save">
          <div className="load-icon">
            <CircularProgressWithLabel value={progress} />
          </div>
          <button
            className="save-button"
            disabled={progress}
            onClick={handleSave}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </container>
    </div>
  );
}
