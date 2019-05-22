import React from "react";
import css from "./menubutton.module.css";
import "../../index.css";

const MenuButton = props => {
  return (
    <>
      <button className={css.attributes} onClick={props.onClick}>
        {props.buttonName}
      </button>
    </>
  );
};

export default MenuButton;
