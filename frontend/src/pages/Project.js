import "./Project.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import UploadDialog from "../components/upload/UploadDialog";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import IntroImage from "./IntroImage/IntroImage.png";

export default function Project() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11} md={8} lg={6}>
        <br />
        <Typography>
          <section className="project-intro-text">
            <h3>
              <u>
                <b>migr-AI-tion</b>
              </u>
              <br />
              is an art, documentary and tech project inspired by new
              possibilities for <mark>storytelling</mark> with data. We are
              creating an image database, and we need your help to help us build
              it. We focus on migration issues and representing{" "}
              <mark> migrant voices</mark> that are not heard in the mainstream
              media. Our methods are collaborative and participatory, and we aim
              to bring more public awareness to issues such as{" "}
              <b> data literacy</b>, <b>invisible labour</b> and {""}
              <b>data colonialism</b>. The database research and educational
              purposes only.
            </h3>
            <div>
              <img styles={{ width: "60%" }} src={IntroImage} />
            </div>
          </section>
        </Typography>
        <br />
        <br />
        <UploadDialog></UploadDialog>
      </Grid>
    </Grid>
  );
}
