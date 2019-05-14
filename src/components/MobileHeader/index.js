import React from "react";
import "../../index.css";
import css from "../MobileHeader/mobileHeader.module.css";
import Logo from "../Logo";
import Nav from "../Nav";

const MobileHeader = () => {
  return (
    <div id="logo" className={css.mainContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.navbar}>
        <Nav />
      </div>
    </div>
  );
};

export default MobileHeader;
