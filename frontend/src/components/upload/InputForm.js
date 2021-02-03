import React from "react";
import axios from "axios";
import TagsInput from "./TagsInput";
import ImageCaption from "./ImageCaption";
import CircularStatic from "./ProgressIcon";
import Button from "@material-ui/core/Button";
import FileInput from "./FileInput";
import "./InputForm.css";

export default function UploadForm() {
  const [image, setImage] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const [caption, setCaption] = React.useState(null);
  const [progress, setProgress] = React.useState(false);

  const enteredCaption = (caption) => {
    setCaption(caption);
  };
  const selectedTags = (tags) => {
    setTags(tags);
  };

  const selectedImage = (img) => {
    setImage(img);
  };

  async function postData() {
    setProgress(true);
    console.log(tags);
    console.log(tags.join(","));
    let formData = new FormData();
    formData.append("file", image);
    formData.append("tags", tags.join(","));
    formData.append("caption", caption);
    await axios
      .post("http://localhost:8000/images", formData, config)
      .then((response) => {
        setPost(`http://localhost:8000/images/${response.data.id}.jpeg`);
      });
    setProgress(false);
  }

  return (
    <div className="save-form">
      <FileInput selectedImage={selectedImage}></FileInput>
      <TagsInput selectedTags={selectedTags} />
      <br />
      <ImageCaption enteredCaption={enteredCaption} />
      <br />
      <div className="save-data">
        <Button className="save-button" palette="primary" onClick={postData}>
          {" "}
          Save{" "}
        </Button>
        {progress && <CircularStatic />}
        {post}
      </div>
    </div>
  );
}
