import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
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
serviceWorker.unregister();

const routing = (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/live" component={Live} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={New} />
        <Route exact path="/post/:id" component={Post} />
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
