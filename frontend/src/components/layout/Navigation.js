import "./Navigation.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import logo from "./logo/logo.png";

const useStyles = makeStyles({
  root: {
    color: "#9611ff",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
      textDecorationColor: "#668389",
    },
  },
});

export default function Navigation() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className="m-app-bar"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" className="text title">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt=""
              style={{
                paddingLeft: "5px",
                paddingTop: "20px",
                height: "70px",
              }}
            />
          </Link>
          <span
            className="logo-label"
            style={{
              position: "relative",
              bottom: "18px",
              paddingLeft: "20px",
            }}
          >
            <i>migr</i>-AI-<i>tion</i>
          </span>
        </Typography>

        <Link
          to="/project"
          className="pages"
          style={{ position: "relative", top: "5px", textDecoration: "none" }}
        >
          <Button className={classes.root}>The project</Button>
        </Link>

        <Link
          to="/gallery"
          className="pages"
          style={{ position: "relative", top: "5px", textDecoration: "none" }}
        >
          <Button className={classes.root}>Gallery</Button>
        </Link>
        <Link
          to="/team"
          className="pages"
          style={{ position: "relative", top: "5px", textDecoration: "none" }}
        >
          <Button className={classes.root}>Team</Button>
        </Link>
        <Link
          to="/contact"
          className="pages"
          style={{ position: "relative", top: "7px", textDecoration: "none" }}
        >
          <Button className={classes.root}>Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
