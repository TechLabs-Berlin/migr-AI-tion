import React from "react";
import ReactModal from "react-modal";
import PostForm from "./PostForm";
import "./UploadButton.css";

export default function UploadButton() {
  const [show, setShow] = React.useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }
  return (
    <div className="upload-button">
      <button onClick={openModal}>Upload</button>
      <ReactModal
        className="upload-modal"
        isOpen={show}
        onRequestClose={closeModal}
      >
        <PostForm />
      </ReactModal>
    </div>
  );
}
