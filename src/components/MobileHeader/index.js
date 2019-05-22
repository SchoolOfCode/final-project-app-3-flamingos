import React from "react";
import "../../index.css";
import css from "../MobileHeader/mobileHeader.module.css";
import Logo from "../Logo";
import Nav from "../Nav";
import LogInOut from "../LoginOut";

const MobileHeader = () => {
  return (
    <div id="logo" className={css.mainContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.navbar}>
        <Nav />
      </div>
      <div className={css.login}>
        <LogInOut />
      </div>
    </div>
  );
};

export default MobileHeader;
