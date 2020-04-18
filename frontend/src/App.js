import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarBlock from "./Container/AppBarBlock/AppBarBlock";
import {Route, Switch} from "react-router-dom";
import Register from "./Container/Register/Register";
import Login from "./Container/Login/Login";

function App() {
    return (
        <>
            <CssBaseline/>
            <AppBarBlock/>
            <Switch>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </>
    );
}

export default App;
