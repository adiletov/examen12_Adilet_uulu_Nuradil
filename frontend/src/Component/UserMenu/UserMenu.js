import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {NavLink} from "react-router-dom";
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const StyledMenu = withStyles({
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


const UserMenu = ({user, logout}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                color="inherit"
                onClick={handleClick}
            >
               Hello {user.fullName}
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem component={NavLink} to="/photo/add">
                    <ListItemIcon>
                        <PhotoIcon/>
                    </ListItemIcon>
                    <ListItemText  primary="Add photo" />
                </StyledMenuItem>
                <StyledMenuItem component={NavLink} to="/my_gallery">
                    <ListItemIcon>
                        <PhotoLibraryIcon/>
                    </ListItemIcon>
                    <ListItemText  primary="My gallery" />
                </StyledMenuItem>
                <StyledMenuItem onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText  primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </>
    );
};

export default UserMenu;