import React from "react";
import axios from "axios";
import TagsInput from "./TagsInput";
import ImageCaption from "./ImageCaption";
import { Typography, Chip, Avatar } from "@material-ui/core";
import { AiOutlineNumber } from "react-icons/ai";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FileInput from "./FileInput";
import "./InputForm.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9611ff",
    },
    secondary: {
      main: "#668389",
    },
  },
});

export default function UploadForm(props) {
  const [post, setPost] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [src, setSrc] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const [returnTags, setReturnTags] = React.useState([]);
  const [caption, setCaption] = React.useState(null);
  const [returnCaption, setReturnCaption] = React.useState(null);
  const [returnAITags, setReturnAITags] = React.useState([]);
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
    let response = await axios.post("http://localhost:8000/images", formData);
    props.newTitle();
    setSrc(`http://localhost:8000/images/${response.data.id}.jpeg`);
    console.log(response.data.caption);
    setReturnCaption(response.data.caption);
    console.log(response.data.tags);
    setReturnTags(response.data.tags);
    console.log(response.data.ai_tags);
    setReturnAITags(response.data.ai_tags || []);
    setPost(true);
    setProgress(false);
  }

  if (post) {
    return (
      <div
        className="returned-post"
        style={{
          width: "100%",
          height: "500px",
          textAlign: "center",
        }}
      >
        <img
          style={{
            display: "block",
            margin: "0 auto",
            height: "50%",
            borderRadius: "5px",
          }}
          className="returned-image"
          src={src}
          alt=""
        />

        <br />
        <ThemeProvider theme={theme}>
          <Typography variant="h6" color="primary">
            <div className="returned-caption">
              <i>"</i>
              <i>
                {" "}
                <span>{returnCaption}</span>{" "}
              </i>
              <i>"</i>
            </div>
          </Typography>
          <br />
          <span className="tags-return">
            <Typography color="primary"> Your Tags: </Typography>
            {returnTags.map((item) => (
              <Chip
                color="primary"
                className="returned-tags-chip"
                avatar={
                  <Avatar>
                    <AiOutlineNumber />
                  </Avatar>
                }
                key={item.id}
                label={item.tag}
                variant="outlined"
              />
            ))}
          </span>
          <br />
          <br />
          <span className="ai_tags_return">
            <Typography color="secondary"> Tags from ImageNet AI: </Typography>
            {returnAITags.length === 0 && (
              <Typography variant="h12" color="secondary">
                <i>[couldn't identify any tags] </i>
              </Typography>
            )}

            {returnAITags.map((item) => (
              <Chip
                style={{ color: "#668389" }}
                className="returned-ai-tags-chip"
                avatar={
                  <Avatar style={{ background: "#668389" }}>
                    <AiOutlineNumber style={{ color: "white" }} />
                  </Avatar>
                }
                key={item.id}
                label={item.tag}
              />
            ))}
          </span>

          <br />
          <br />
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="save-form">
        <FileInput selectedImage={selectedImage}></FileInput>
        <TagsInput selectedTags={selectedTags} />
        <br />
        <ImageCaption enteredCaption={enteredCaption} />
        <br />
        <div className="save-data">
          <Button
            disabled={!image || !caption || tags.length === 0}
            className="save-button"
            palette="primary"
            onClick={postData}
          >
            {" "}
            Save{" "}
          </Button>
          <ThemeProvider theme={theme}>
            {progress && <CircularProgress />}
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
