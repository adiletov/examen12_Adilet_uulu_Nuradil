import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {apiURL} from "../../apiURL";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePhoto} from "../../Store/Action/actionPhotos";
import ModalBlock from "../ModalBlock/ModalBlock";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
    },
    media: {
        height: 340,
    },
});

const CardPhoto = ({title, image, user, id}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deletePhotoId = (idPhoto) => {
        dispatch(deletePhoto(idPhoto))
    };


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={apiURL + '/uploads/' + image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    {
                        user ?
                            <>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Divider/>
                                <Typography>
                                    by <NavLink to={`/gallery/${user._id}`}>{user.fullName}</NavLink>
                                </Typography>
                            </>
                            :
                            <>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                            </>
                    }
                </CardContent>
            </CardActionArea>
            <CardActions>
                {!user &&
                <IconButton color="primary" aria-label="upload picture" component="span"
                            onClick={() => deletePhotoId(id)}>
                    <DeleteForeverIcon/>
                </IconButton>
                }
                <ModalBlock image={image}/>
            </CardActions>
        </Card>
    );
};

export default CardPhoto;