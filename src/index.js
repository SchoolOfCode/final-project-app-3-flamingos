import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import "../src/index.css";

// Import pages
import Home from "./pages/Home";
import New from "./pages/New";
import Post from "./pages/Post";
import Live from "./pages/Live";
import Login from "./pages/Login";
import Register from "./pages/Register";

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

const routing = (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/live" component={Live} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={New} />
        <Route exact path="/post/:id" component={Post} />
      </Router>
    </MuiThemeProvider>
  </JssProvider>
);

ReactDOM.render(routing, document.getElementById("root"));
