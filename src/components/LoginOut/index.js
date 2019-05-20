import React, { Link, useContext } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import { CssBaseline } from "@material-ui/core";

const logOut = () => {};

const LoginOut = () => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);
  return isLoggedIn ? (
    <div className={CssBaseline.mainContainer}>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className={CssBaseline.mainContainer}>
      <button onClick={logout}>Log In</button>
      <button onClick={logout}>Register</button>
    </div>
  );
};

export default LoginOut;
