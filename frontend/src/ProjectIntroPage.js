import React, { useState } from "react";
import "./ProjectIntroPage.css";
import UploadModal from "./Uploader/UploadModal";

export default function ProjectIntroPage(props) {
  const [showButton, setShowButton] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = () => {
    setShowButton(true);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="project-intro-page">
      <section class="project-intro-text">
        <h3>
          -aims to raise more awareness about marginalization and data literacy,
          and to educate the public about hidden AI bias and invisible labor
          through a platform for collaboration and interactive data
          visualization. The goal of this art, documentary, and tech project is
          to reimagine the construction of AI technologies as participatory
          processes to heal historical ruptures and collective traumas through
          new forms of storytelling. The proposal is to build a platform to
          collaborate with migrants on an image dataset to train future computer
          vision technologies. The app will include an interactive data
          visualization of computer vision word index to which users can
          contribute. The initial sample data of at least 100 words and 300
          images will be created in collaboration and consultation with
          migrants, refugees, experts, and activists. This will give migrants a
          chance to participate in the development of new technologies and the
          future media landscape.
        </h3>
        <button class="collaborate-button" onClick={handleClick}>
          {" "}
          Collaborate!{" "}
        </button>
      </section>
      {showButton && (
        <div>
          <button class="upload" type="button" onClick={handleOpen}>
            Upload now
          </button>
          <UploadModal open={openModal} onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
