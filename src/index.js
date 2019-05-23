import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import "../src/index.css";

// Import pages
import {
    LoggedInContext,
    LoggedInProvider
} from "./components/LoggedInContext";
import Home from "./pages/Home";
import New from "./pages/New";
import Post from "./pages/Post"; /**shows one post ---not yet implemented */
import Live from "./pages/Live";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Four04 from "./pages/Four04";
import Confirm from "./pages/Confirm";
import Profile from "./pages/Profile";

import * as serviceWorker from "./serviceWorker";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import theme from "../Themes/theme";

const theme = createMuiTheme({
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiOutlinedInput: {
            // Name of the rule
            notchedOutline: {
                borderColor: "white !important"
            }
        },
        MuiFormLabel: {
            focused: {
                color: "white !important"
            }
        }
    }
});

const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    insertionPoint: "jss-insertion-point"
});

serviceWorker.unregister();

const Routing = () => {
    return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
                <LoggedInProvider>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/live" component={Live} />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/new" component={New} />
                            <Route path="/profile" component={Profile} />
                            <Route exact path="/c/:id" component={Confirm} />
                            <Route exact path="/p/:id" component={Post} />
                            <Route component={Four04} />
                        </Switch>
                    </Router>
                </LoggedInProvider>
            </MuiThemeProvider>
        </JssProvider>
    );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
