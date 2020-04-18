import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarBlock from "./Container/AppBarBlock/AppBarBlock";
import {Route, Switch} from "react-router-dom";
import Register from "./Container/Register/Register";
import Login from "./Container/Login/Login";
import {ToastContainer} from "react-toastify";
import AddPhoto from "./Container/AddPhoto/AddPhoto";
import MyGallery from "./Container/MyGallery/MyGallery";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import PhotoGallery from "./Container/PhotoGallery/PhotoGallery";
import GalleryBy from "./Container/GalleryBy/GalleryBy";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => state.users.user);
    return (
        <>
            <CssBaseline/>
            <ToastContainer autoClose={1000}/>
            <AppBarBlock/>
            <Toolbar/>
            <Container>
                {
                    user &&
                    <>
                        <Route exact path="/my_gallery" component={MyGallery}/>
                        <Route exact path="/photo/add" component={AddPhoto}/>
                    </>
                }
                <Switch>
                    <Route exact path="/" component={PhotoGallery}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/gallery/:id" component={GalleryBy}/>
                </Switch>
            </Container>
        </>
    );
}

export default App;
