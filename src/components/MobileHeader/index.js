import React from "react";
import "../../index.css";
import css from "../MobileHeader/mobileHeader.module.css";
import Logo from "../Logo";

const MobileHeader = () => {
  return (
    <div id="logo" className={css.mainContainer}>
      <Logo />
    </div>
  );
};

export default MobileHeader;
