import React from "react";
import Nav from "../../components/Nav";
import RegisterForm from "../../components/RegisterForm";

import "../../index.css";

const Register = props => {
    return (
        <div id="register">
            <h1>Register</h1>
            <RegisterForm />
            <Nav />
        </div>
    );
};

export default Register;
