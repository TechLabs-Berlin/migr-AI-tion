import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 13,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 9,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#668389",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function MatchBar({ match, aitag }) {
  const classes = useStyles();

  return (
    <div className="matchbar-wrapper">
      <BorderLinearProgress
        className={classes.root}
        variant="determinate"
        value={match}
      />
      <Typography variant="body2">
        {match >= 9 ? `${match.toFixed(1)}% ${aitag}` : `${match}% ${aitag}`}
      </Typography>
    </div>
  );
}
