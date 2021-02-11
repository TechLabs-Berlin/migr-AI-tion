import "./Project.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import UploadDialog from "../components/upload/UploadDialog";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import IntroSlider from "../components/introslider/IntroSlider";

export default function Project() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11} md={8} lg={6}>
        <br />
        <IntroSlider />
        <Typography>
          <section className="project-intro-text">
            <h3
              style={{ position: "relative", top: "-30px", textIndent: "50px" }}
            >
              We are creating an image database, and we need your help to help
              us build it! We focus on migration issues and{" "}
              <mark>representing migrant voices</mark> that are not heard in the
              mainstream media. We want to find new forms of{" "}
              <mark>storytelling with data</mark>, and to bring more public
              awareness to issues such as <b> data literacy</b>,{" "}
              <b>invisible labour</b> and {""}
              <b>data colonialism</b>. The database research and educational
              purposes only.
            </h3>
          </section>
        </Typography>
        <UploadDialog></UploadDialog>
        <br />
      </Grid>
    </Grid>
  );
}
