import React, {Component} from 'react';
import FormElement from "../../Component/FormElement/FormElement";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
                            <Grid container spacing={2} direction="column">
                                <Grid item xs>
                                    <FormElement
                                        type="text"
                                        propertyName="fullName"
                                        value={this.state.fullName}
                                        title="Full Name"
                                        onChange={this.inputChangeHandler}
                                        error={null}
                                    />
                                </Grid>
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
                                    <Button type="submit" variant="contained" color="primary">Register</Button>
                                </Grid>
                                <Grid item xs>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Register;