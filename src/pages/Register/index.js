import React from "react";
import RegisterForm from "../../components/RegisterForm";
import css from "./Register.module.css";
import MobileHeader from "../../components/MobileHeader";
import "../../index.css";

const Register = props => {
  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <div className="page-wrap">
      <div className={css.registerForm}>
        <h1>register</h1>
        <RegisterForm />
      </div>
    </div>
    </div>
  );
};

export default Register;
