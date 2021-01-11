import "./Navigation.css";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Navigation() {
  return (
    <AppBar
      position="static"
      className="m-app-bar"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" className="text title">
          <Link to="/">Migr-AI-tion</Link>
        </Typography>

        <Link to="/project">
          <Button color="inherit" className="text">
            The project
          </Button>
        </Link>

        <Link to="/gallery">
          <Button color="inherit" className="text">
            Gallery
          </Button>
        </Link>

        <Link to="/contact">
          <Button color="inherit" className="text">
            Contact
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
