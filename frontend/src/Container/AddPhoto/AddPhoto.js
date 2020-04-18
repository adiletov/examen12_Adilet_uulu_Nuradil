import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormElement from "../../Component/FormElement/FormElement";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addNewPhoto} from "../../Store/Action/actionPhotos";

class AddPhoto extends Component {
    state = {
        title: '',
        image: ''
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    fileChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.files[0]})
    };

    submitNewPhoto = (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(this.state).forEach(key =>
            formData.append(key, this.state[key])
        );
        this.props.addNewPhoto(formData);
    };
    errorHandler = (fieldName) => {
        return this.props.error &&
            this.props.error.errors &&
            this.props.error.errors[fieldName]
    };
    render() {
        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12} md={10} lg={4}>
                        <Box pt={2} pb={2}>
                            <Typography variant="h4">
                                Add photo
                            </Typography>
                        </Box>
                        <form onSubmit={this.submitNewPhoto}>
                            <Grid container spacing={2} direction="column">
                                <Grid item xs>
                                    <FormElement
                                        type="text"
                                        propertyName="title"
                                        value={this.state.title}
                                        title="Title"
                                        onChange={this.inputChangeHandler}
                                        error={this.errorHandler('title')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <FormElement
                                        type="file"
                                        title="Image"
                                        propertyName="image"
                                        onChange={this.fileChangeHandler}
                                        error={this.errorHandler('image')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Button type="submit" color="primary" variant="contained"> Add photo</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => ({
    error: state.photos.addError
});
const mapDispatchToProps = dispatch => ({
    addNewPhoto: (photoData) => dispatch(addNewPhoto(photoData))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);