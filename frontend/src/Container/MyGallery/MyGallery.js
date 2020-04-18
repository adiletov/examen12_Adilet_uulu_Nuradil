import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGalleryUser} from "../../Store/Action/actionPhotos";
import CardPhoto from "../../Component/CardPhoto/CardPhoto";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


const MyGallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGalleryUser())
    }, [dispatch]);
    const gallery = useSelector(state => state.photos.galleryUser);
    return (
        <>
            <Box pt={2} pb={2}>
                <Typography variant="h4">
                    My gallery
                </Typography>
            </Box>
            <Grid container spacing={1}>
                {gallery.map(obj =>
                    <Grid item xs key={obj._id}>
                        <CardPhoto title={obj.title} id={obj._id} image={obj.image}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default MyGallery;