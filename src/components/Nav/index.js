import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import css from "./Nav.module.css";
import "../../index.css";

const Nav = props => {
  return (
    <nav className={css.container}>
      {props.isLoggedIn && (
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Post</Link>
            </li>
            <li>
              <Link to="/live">Live</Link>
            </li>
          </ul>
        </Router>
      )}
    </nav>
  );
};

export default Nav;
