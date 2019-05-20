import React, { useContext } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import css from "./Nav.module.css";
import "../../index.css";
import { LoggedInContext } from "../LoggedInContext";

const Nav = props => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);
  return (
    <nav className={css.container}>
      {/* {props.isLoggedIn && ( */}
      {isLoggedIn ? (
        <ul>
          <li>
            <Link to="/new">Post</Link>
          </li>
          <li>
            <Link to="/live">Live</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      ) : (
        <Link to="/live">Live</Link>
      )}

      {/* )} */}
    </nav>
  );
};

export default Nav;
