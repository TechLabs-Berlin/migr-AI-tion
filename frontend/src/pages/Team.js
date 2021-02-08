import React from "react";
import { Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Team.css";

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

export default function Team() {
  return (
    <div>
      <p className="team">
        <ThemeProvider theme={theme}>
          <span className="teammates-names"> Jie Liang Lin # Web</span>
          <br />
          <span className="description">
            is a Chinese-American, interdisciplinary artist and media
            anthropologist based in Berlin. Her work focuses on the
            intersections of new technologies and migration phenomena, and the
            mediation of migration experiences. She is responsible for the
            project idea and web development for this project.
          </span>
          <br />
          <br />
          <span className="teammates-names">
            Btari Galuh Chandraditya # Web
          </span>
          <br />
          <span className="description">
            is an Indonesian aeronautics engineering student living in Berlin.
            Besides structural design in engineering field, she also does
            freelance projects in graphic design, animation, and motion
            graphics. She is responsible for the web development for this
            project.
          </span>
          <br />
          <br />
          <span className="teammates-names">Michèle Fischer # Data </span>
          <br />
          <span className="description">
            works as a team building and school workshop leader in political
            education and street art with a strong background in Graffiti. She
            is part of the backend team for this project.
          </span>
          <br />
          <br />
          <span className="teammates-names">Margit Hain # Data </span>
          <br />
          <span className="description">
            is German with a psychology background and a high interest in
            politics, and also participated in the backend team for this
            project.
          </span>
          <br />
          <br />
          <span className="teammates-names">Sofia Fontenla # UX</span>
          <br />
          <span className="description">
            is an Argentinean audiovisual artist based in Berlin. She is
            responsible for the user experience and interface design for this
            project.
          </span>
          <br />
          <br />
          <span className="teammates-names">Nuno Moreira # UX </span>
          <br />
          <span className="description">
            is a Portuguese architect based in Berlin interested in bringing the
            Human-Centered Design approach to the Digital World. He is
            responsible for the User Experience and the Interface Design for
            this project.
          </span>
          <br />
          <br />
          <span className="teammates-names">Paul Bochtler # AI</span>
          <br />
          <span className="description">
            is a political scientist working in data-science. He is passionate
            for the democratization of digital knowledge and methods. He worked
            on the backend.
          </span>
          <br />
          <br />
          <span className="teammates-names">Jan Dix # Mentor</span>
          <br />
          <br />
          <span className="description">
            Special thanks to <b>TechLabs</b> for bringing us together!
          </span>
        </ThemeProvider>
      </p>
    </div>
  );
}
