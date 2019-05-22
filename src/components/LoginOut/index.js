import React, { useContext } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import css from "./loginOut.module.css";
import MenuButton from "../MenuButton";
import { Link } from "react-router-dom";

const LoginOut = () => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);
  return isLoggedIn ? (
    <div className={css.mainContainer}>
      <MenuButton buttonName="Logout" className={css.button} onClick={logout} />
    </div>
  ) : (
    <div className={css.mainContainer}>
        <Link className={css.link} to="/login">
      <MenuButton className={css.button} buttonName="Sign In" />
    </Link>
    <Link className={css.link} to="/register">
      <MenuButton className={css.button} buttonName="Register" />
      </Link>
    </div>
  );
};

export default LoginOut;
