import React from 'react';
import Modal from "@material-ui/core/Modal";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {apiURL} from "../../apiURL";
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import IconButton from "@material-ui/core/IconButton";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    image: {
        width: '100%'
    }
}));
const ModalBlock = ({image}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <img className={classes.image} src={apiURL + '/uploads/' + image} alt=""/>
        </div>
    );
    return (
        <>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOpen}>
                <ZoomOutMapIcon/>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}

            >
                {body}
            </Modal>
        </>
    );
};

export default ModalBlock;