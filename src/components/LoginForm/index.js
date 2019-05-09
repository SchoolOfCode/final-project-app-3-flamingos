import React, { useState } from "react";
import css from "./LoginForm.module.css";
import config from "../config";

const LoginForm = props => {
    const [phoneCountry, setPhoneCountry] = useState("+44");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

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
        fetch(`${config.API_URL}/authenticate`, {
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
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setPhoneCountry("");
                setPhoneNumber("");
                setPassword("");
            });
    };

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css.phone}>
                <select
                    name="phoneCountry"
                    className={css.phoneCountry}
                    onChange={handlePhoneCountry}
                    value={phoneCountry}
                >
                    <option value="+44">+44</option>
                </select>
                <input
                    className={css.phoneNumber}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="7412345678"
                    required={true}
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                />
            </div>
            <input
                className={css.password}
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
