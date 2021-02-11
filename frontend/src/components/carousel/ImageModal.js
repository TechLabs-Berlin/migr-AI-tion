import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "transparent",
    boxShadow: theme.shadows[5],
    outline: "none",
    borderRadius: "5px",
  },
  modal: {
    display: "flex",
    padding: "none",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ImageModal({ identifier }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <img
        className={classes.img}
        key={identifier}
        src={`http://localhost:8000/images/${identifier}.jpeg`}
        alt="img-result"
        style={{
          border: "solid 3px #9611ff",
          borderRadius: "5px",
          width: "70em",
          maxWidth: "100%",
        }}
      />
    </div>
  );

  return (
    <div>
      <img
        key={identifier}
        src={`http://localhost:8000/images/${identifier}.jpeg`}
        alt="img-result"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}
