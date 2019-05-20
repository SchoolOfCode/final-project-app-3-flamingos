import React from "react";
import Nav from "../../components/Nav";
import LoginForm from "../../components/LoginForm";
import css from "./Login.module.css";
import MobileHeader from "../../components/MobileHeader";
import "../../index.css";

const Login = props => {
  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <div className={css.registerForm}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
