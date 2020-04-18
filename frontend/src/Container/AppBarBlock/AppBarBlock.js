import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import UserMenu from "../../Component/UserMenu/UserMenu";
import {logoutUser} from "../../Store/Action/actionUsers";

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
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} component={NavLink} to="/">
                        PhotoGallery
                    </Typography>

                    {
                        user ?
                                <UserMenu
                                user={user}
                                logout={()=> dispatch(logoutUser())}
                                />
                            :
                            <>
                                <Button color="inherit" component={NavLink} to="/register">Register</Button>
                                <Button color="inherit" component={NavLink} to="/login">Login</Button>
                            </>
                    }

                </Toolbar>
            </AppBar>
        </>
    );
};

export default AppBarBlock;