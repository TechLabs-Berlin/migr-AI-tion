import React from "react";
import axios from "axios";
import TagsInput from "./TagsInput";
import ImageCaption from "./ImageCaption";
import CircularStatic from "./ProgressIcon";
import Button from "@material-ui/core/Button";
import FileInput from "./FileInput";

export default function UploadForm() {
  const [image, setImage] = React.useState(null);
  const [src, setSrc] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const [caption, setCaption] = React.useState(null);
  const [uploadProgress, setUploadProgress] = React.useState(false);

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
    console.log(tags);
    console.log(tags.join(","));

    let formData = new FormData();
    formData.append("file", image);
    formData.append("tags", tags.join(","));
    formData.append("caption", caption);
    const config = {
      onUploadProgress: () => {
        setUploadProgress(true);
      },
    };
    await axios
      .post("http://localhost:8000/images", formData, config)
      .then((response) => {
        setSrc(`http://localhost:8000/images/${response.data.id}.jpeg`);
      });
    setUploadProgress(false);
  }

  return (
    <div className="save-form">
      <FileInput selectedImage={selectedImage}></FileInput>
      <TagsInput selectedTags={selectedTags} />
      <br />
      <ImageCaption enteredCaption={enteredCaption} />

      <div className="save-data">
        <Button onClick={postData}> Save </Button>
        {uploadProgress && <CircularStatic />}
      </div>
    </div>
  );
}
