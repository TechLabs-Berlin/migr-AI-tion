import React from "react";
import ReactModal from "react-modal";
import TagsInput from "./TagsInput";
import UploadForm from "./UploadForm";
import "./UploadButton.css";
import ImageCaption from "./ImageCaption";

export default function UploadButton() {
  const [show, setShow] = React.useState(false);

  const selectedTags = (tags) => console.log(tags);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }
  return (
    <div className="upload-button">
      <button onClick={openModal}>upload button</button>
      <ReactModal isOpen={show} onRequestClose={closeModal}>
        <UploadForm />
        <TagsInput selectedTags={selectedTags} />
        <ImageCaption />
      </ReactModal>
    </div>
  );
}
