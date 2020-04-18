import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGallery} from "../../Store/Action/actionPhotos";
import Grid from "@material-ui/core/Grid";
import CardPhoto from "../../Component/CardPhoto/CardPhoto";

const PhotoGallery = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllGallery())
    }, [dispatch]);
    const gallery = useSelector(state=> state.photos.allGallery);
    return (
        <>
            <Grid container spacing={1}>
                { gallery.map(obj=>
                    <Grid item xs key={obj._id}>
                        <CardPhoto title={obj.title} id={obj._id} user={obj.userId} image={obj.image}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default PhotoGallery;