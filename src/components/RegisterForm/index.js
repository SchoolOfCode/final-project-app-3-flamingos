import React, { useState } from "react";
import css from "./RegisterForm.module.css";
import config from "../config";

const RegisterForm = props => {
    const [phoneCountry, setPhoneCountry] = useState("+44");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const handlePhoneCountry = event => {
        const { value } = event.target;
        setPhoneCountry(value);
    };

    const handlePhoneNumber = event => {
        const { value } = event.target;
        setPhoneNumber(value);
    };

    const handleName = event => {
        const { value } = event.target;
        setName(value);
    };

    const handleDisplayName = event => {
        const { value } = event.target;
        setDisplayName(value);
    };

    const handlePassword = event => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`${config.API_URL}/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: `${phoneCountry}${phoneNumber}`,
                name: name,
                displayName: displayName,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
            .finally(() => {
                setPhoneCountry("");
                setPhoneNumber("");
                setName("");
                setDisplayName("");
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
                className={css.name}
                id="name"
                name="name"
                type="text"
                placeholder="Joe Smith"
                required={true}
                value={name}
                onChange={handleName}
            />
            <input
                className={css.displayName}
                id="displayName"
                name="displayName"
                type="text"
                placeholder="joey_92"
                required={true}
                value={displayName}
                onChange={handleDisplayName}
            />
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

export default RegisterForm;
