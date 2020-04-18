import React, {Component} from 'react';
import FormElement from "../../Component/FormElement/FormElement";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {registerUser} from "../../Store/Action/actionUsers";
import Alert from "@material-ui/lab/Alert";
import FacebookButton from "../../Component/FacebookButton/FacebookButton";
import Divider from "@material-ui/core/Divider";

class Register extends Component {
    state = {
        fullName: '',
        username: '',
        password: '',
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };


    submitChangeHandler = (e) => {
        e.preventDefault();
        this.props.registerUser({...this.state})
    };

    errorHandler = (fieldName) => {
        return (
            this.props.error &&
            this.props.error.errors &&
            this.props.error.errors[fieldName] &&
            this.props.error.errors[fieldName].message
        );
    };

    render() {
        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12} md={10} lg={4}>
                        <Box pt={2} pb={2}>
                            <Typography variant="h4">
                                Register
                            </Typography>
                        </Box>
                        <form onSubmit={this.submitChangeHandler}>
                            {this.props.error && this.props.error.global && (
                                <Alert color="warning">
                                    {this.props.error.global}
                                </Alert>
                            )}
                            <Grid container spacing={2} direction="column">
                                <Grid item xs>
                                    <FormElement
                                        type="text"
                                        propertyName="fullName"
                                        value={this.state.fullName}
                                        title="Full Name"
                                        onChange={this.inputChangeHandler}
                                        error={this.errorHandler('fullName')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <FormElement
                                        type="text"
                                        propertyName="username"
                                        value={this.state.username}
                                        title="Username"
                                        onChange={this.inputChangeHandler}
                                        error={this.errorHandler('username')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <FormElement
                                        type="password"
                                        propertyName="password"
                                        value={this.state.password}
                                        title="Password"
                                        onChange={this.inputChangeHandler}
                                        error={this.errorHandler('password')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Button type="submit" variant="contained" color="primary">Register</Button>
                                </Grid>
                                <Grid item xs>
                                    <Divider/>
                                </Grid>
                                <Grid item xs>
                                    <FacebookButton title="Register"/>
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
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: (user) => dispatch(registerUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);