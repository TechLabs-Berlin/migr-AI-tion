import "./Project.css";
import React from "react";

import Grid from "@material-ui/core/Grid";

import UploadDialog from "../components/upload/UploadDialog";

export default function Project() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11} md={8} lg={6}>
        <section className="project-intro-text">
          <h3>
            -aims to raise more awareness about marginalization and data
            literacy, and to educate the public about hidden AI bias and
            invisible labor through a platform for collaboration and interactive
            data visualization. The goal of this art, documentary, and tech
            project is to reimagine the construction of AI technologies as
            participatory processes to heal historical ruptures and collective
            traumas through new forms of storytelling. The proposal is to build
            a platform to collaborate with migrants on an image dataset to train
            future computer vision technologies. The app will include an
            interactive data visualization of computer vision word index to
            which users can contribute. The initial sample data of at least 100
            words and 300 images will be created in collaboration and
            consultation with migrants, refugees, experts, and activists. This
            will give migrants a chance to participate in the development of new
            technologies and the future media landscape.
          </h3>
        </section>
        <UploadDialog></UploadDialog>
      </Grid>
    </Grid>
  );
}
