import React, { useContext } from "react";
import { Link } from "react-router-dom";
import css from "./Nav.module.css";
import "../../index.css";
import { LoggedInContext } from "../LoggedInContext";

const Nav = props => {
  const { isLoggedIn } = useContext(LoggedInContext);
  return (
    <nav className={css.container}>
      {/* {props.isLoggedIn && ( */}
      {isLoggedIn ? (
        <>
          <Link className={css.link} to="/new">
            Post
          </Link>

          <Link className={css.link} to="/live">
            Live
          </Link>

          <Link className={css.link} to="/profile">
            Profile
          </Link>
        </>
      ) : (
        <>
          <Link className={css.link} to="/live">
            Live
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
