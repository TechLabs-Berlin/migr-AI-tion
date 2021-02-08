import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "3em",
        paddingBottom: "6em"
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
            <img className={classes.img}
                key={identifier} src={`http://localhost:8000/images/${identifier}.jpeg`}
                alt="img-result"
                style={{
                    width: "70em",
                    maxWidth: "100%",
                }} />
        </div>
    );

    return (
        <div>
            <img
                key={identifier} src={`http://localhost:8000/images/${identifier}.jpeg`}
                alt="img-result" onClick={handleOpen} />
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


