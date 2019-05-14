import React from "react";
import css from "../Button/button.module.css";
import "../../index.css";

const Button = props => {
  return (
    <>
      <button className={css.attributes} onClick={props.onClick}>
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
