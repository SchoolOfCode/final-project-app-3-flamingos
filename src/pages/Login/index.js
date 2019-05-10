import React from "react";
import Nav from "../../components/Nav";
import LoginForm from "../../components/LoginForm";

import "../../index.css";

const Login = props => {
    return (
        <div id="login">
            <h1>Login</h1>
            <LoginForm />
            <Nav />
        </div>
    );
};

export default Login;
