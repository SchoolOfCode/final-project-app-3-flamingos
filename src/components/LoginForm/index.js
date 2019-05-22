import React, { useState, useContext } from "react";
import css from "./LoginForm.module.css";
import config from "../../config";

import { Link, BrowserRouter as Router } from "react-router-dom";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

import { Route } from "react-router-dom";
import { LoggedInContext } from "../../components/LoggedInContext";

const inputProps = {
    defaultValue: {
        input: {
            color: "white"
        }
    }
};

const LoginForm = props => {
    const [phoneCountry, setPhoneCountry] = useState("+44");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn, login } = useContext(LoggedInContext);

    const handlePhoneCountry = event => {
        const { value } = event.target;
        setPhoneCountry(value);
    };

    const handlePhoneNumber = event => {
        const { value } = event.target;
        setPhoneNumber(value);
    };

    const handlePassword = event => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`${config.AUTHENTICATE}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: `${phoneCountry}${phoneNumber}`,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    login();
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setPhoneCountry("");
                setPhoneNumber("");
                setPassword("");
            });
    };

    return isLoggedIn ? (
        <Route
            render={({ history }) => {
                history.push("/new");
            }}
        />
    ) : (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css.phone}>
                <Select
                    value={phoneCountry}
                    onChange={handlePhoneCountry}
                    input={
                        <OutlinedInput
                            name="telephone-number"
                            id="outlined-tel-number-simple"
                        />
                    }
                >
                    <MenuItem value={"+44"}>+44</MenuItem>
                </Select>
                <TextField
                    className={css.phoneNumber}
                    label="phone number"
                    variant="outlined"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="7412345678"
                    required={true}
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    inputProps={inputProps}
                />
            </div>
            <TextField
                className={css.password}
                variant="outlined"
                classes={{ root: css.border }}
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required={true}
                value={password}
                onChange={handlePassword}
            />
            <input
                className={css.submit}
                id="submit"
                name="submit"
                type="submit"
            />
        </form>
    );
};

export default LoginForm;
