import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Import pages
import Home from "./pages/Home";

import * as serviceWorker from "./serviceWorker";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const routing = (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
