import Navbar from "./Navbar/Navbar";
import React, {useEffect, useState} from "react";
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, withRouter} from "react-router-dom";

import SignIn from "./Auth/SignIn";
import MainPage from "../pages/MainPage";
function App(props) {

    return (
        <div className="App">
            <Navbar/>
                <Switch>
                    <Route path="/">
                        <MainPage />
                    </Route>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                </Switch>
        </div>
    );
}

export default withRouter(App);
