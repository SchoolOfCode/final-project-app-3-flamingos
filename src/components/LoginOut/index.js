import React, { Link, useContext } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import css from "./loginOut.module.css";
import MenuButton from "../MenuButton";

const LoginOut = () => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);
  return isLoggedIn ? (
    <div className={css.mainContainer}>
      <MenuButton buttonName="Logout" className={css.button} onClick={logout} />
    </div>
  ) : (
    <div className={css.mainContainer}>
      <MenuButton className={css.button} buttonName="Log In" />

      <MenuButton className={css.button} buttonName="Register" />
    </div>
  );
};

export default LoginOut;
