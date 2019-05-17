import React, { useState } from "react";
import css from "./RegisterForm.module.css";
import config from "../../config";
import "../../index.css";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Route } from "react-router-dom";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = props => {
  const [phoneCountry, setPhoneCountry] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  let [isRegistered, handleRegister] = useState(false);

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
    fetch(`${config.REACT_APP_ADD_USER}/users`, {
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
      .then(data => {
        console.log(data.message);
        if (data.message === "Number exists") {
          handleRegister(true);
        } else if (data.message === "User created") {
          return (
            <Route
              render={({ history }) => {
                history.push("/login");
              }}
            />
          );
        } else {
          return;
        }
      })
      .catch(err => console.error(err))
      .finally(() => {
        setPhoneCountry("");
        setPhoneNumber("");
        setName("");
        setDisplayName("");
        setPassword("");
      });
  };

  // return isRegistered ? (
  //   <Route
  //     render={({ history }) => {
  //       history.push("/login");
  //     }}
  //   />
  // ) : (
  return (
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
          label="phone number"
          variant="outlined"
          classes={{ root: css.border }}
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="7412345678"
          required={true}
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
      </div>
      <TextField
        label="name"
        variant="outlined"
        className={css.name}
        id="name"
        name="name"
        type="text"
        placeholder="Joe Smith"
        required={true}
        value={name}
        onChange={handleName}
      />
      <TextField
        label="display name"
        variant="outlined"
        className={css.displayName}
        id="displayName"
        name="displayName"
        type="text"
        placeholder="joey_92"
        required={true}
        value={displayName}
        onChange={handleDisplayName}
      />
      <TextField
        label="password"
        variant="outlined"
        className={css.password}
        id="password"
        name="password"
        type="password"
        placeholder="password"
        required={true}
        value={password}
        onChange={handlePassword}
      />
      <div className={css.submitContainer}>
        {isRegistered ? (
          <div>
            <div style={{ color: "white", "padding-top": "20px" }}>
              You've already registered, click below to sign in
            </div>
            <Link className={css.link} to="/login">
              <Button buttonName="Sign In" />
            </Link>
          </div>
        ) : (
          <input
            className={css.submit}
            id="submit"
            name="submit"
            type="submit"
          />
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
