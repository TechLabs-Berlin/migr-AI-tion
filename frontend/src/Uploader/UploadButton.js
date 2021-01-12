import React from "react";
import ReactModal from "react-modal";
import PostForm from "./PostForm";
import "./UploadButton.css";

export default function UploadButton() {
  const [showModal, setShowModal] = React.useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="upload-button">
      <button onClick={openModal}>Upload</button>
      <ReactModal
        className="upload-modal"
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <PostForm />
      </ReactModal>
    </div>
  );
}
