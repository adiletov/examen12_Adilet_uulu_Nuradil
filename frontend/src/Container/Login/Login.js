import React, {Component} from 'react';
import FormElement from "../../Component/FormElement/FormElement";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {loginUser} from "../../Store/Action/actionUsers";
import {Alert} from "@material-ui/lab";
import Divider from "@material-ui/core/Divider";
import FacebookButton from "../../Component/FacebookButton/FacebookButton";

class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };


    submitChangeHandler = (e) => {
        e.preventDefault();
        this.props.loginUser({...this.state})
    };
    render() {
        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12} md={10} lg={4}>
                        <Box pt={2} pb={2}>
                            <Typography variant="h4">
                                Login
                            </Typography>
                        </Box>
                        <form onSubmit={this.submitChangeHandler}>
                            {this.props.error &&
                            <Alert color="warning">
                                {this.props.error.error}
                            </Alert>
                            }
                            <Grid container spacing={2} direction="column">
                                <Grid item xs>
                                    <FormElement
                                        type="text"
                                        propertyName="username"
                                        value={this.state.username}
                                        title="Username"
                                        onChange={this.inputChangeHandler}
                                        error={null}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <FormElement
                                        type="password"
                                        propertyName="password"
                                        value={this.state.password}
                                        title="Password"
                                        onChange={this.inputChangeHandler}
                                        error={null}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Button type="submit" variant="contained" color="primary">Login</Button>
                                </Grid>
                                <Grid item xs>
                                    <Divider/>
                                </Grid>
                                <Grid item xs>
                                    <FacebookButton title="Login"/>
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
    error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: (user)=> dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);