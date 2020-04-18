import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'white',
        textDecoration: 'none',
        flexGrow: 1,
    },
}));

const AppBarBlock = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} component={NavLink} to="/">
                        PhotoGallery
                    </Typography>
                    <Button color="inherit" component={NavLink} to="/register">Register</Button>
                    <Button color="inherit" component={NavLink} to="/login">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default AppBarBlock;