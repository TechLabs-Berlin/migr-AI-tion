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
            <u>
              <b>migr-AI-tion</b>
            </u>
            <br />
            is an art, documentary and tech project inspired by new
            possibilities of <mark>storytelling</mark> through data. We focus on
            migration issues and representing <mark> migrant voices</mark> that
            are not heard in the mainstream media. Our methods are collaborative
            and participatory, and we aim to bring more public awareness to
            issues such as{" "}
            <i>
              <b> data literacy</b>
            </i>
            ,{" "}
            <i>
              <b>invisible labour</b>
            </i>{" "}
            and {""}
            <i>
              <b>data colonialism</b>
            </i>
            .
          </h3>
        </section>
        <UploadDialog></UploadDialog>
      </Grid>
    </Grid>
  );
}
