import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGalleryById} from "../../Store/Action/actionPhotos";
import {Grid} from "@material-ui/core";
import CardPhoto from "../../Component/CardPhoto/CardPhoto";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const GalleryBy = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGalleryById(props.match.params.id))
    }, [dispatch, props.match.params.id]);
    const gallery = useSelector(state => state.photos.galleryUser);
    return (
        <>
            {gallery[0] &&
            <Box pt={2} pb={2}>
                <Typography variant="h4">
                    {gallery[0].userId.fullName}
                </Typography>
            </Box>
            }
            <Grid container spacing={1} wrap="wrap">
                {gallery.map(obj =>
                    <Grid item xs={4} key={obj._id}>
                        <CardPhoto title={obj.title} user={obj.userId} id={obj._id} image={obj.image}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default GalleryBy;