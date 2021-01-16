import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#nnn" },
    secondary: {
      main: "#9611ff",
    },
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography
              color="secondary"
              variant="h6"
              className={classes.title}
            >
              MIGR-AI-TION
            </Typography>
            <Button color="secondary">Project</Button>
            {""}
            <Button color="secondary">Gallery</Button>
            {""}
            <Button color="secondary">Contact</Button>
            {""}
            <Button color="secondary">About</Button>
            {""}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
