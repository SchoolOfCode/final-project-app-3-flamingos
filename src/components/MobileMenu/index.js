import React from "react";
import css from "../MobileMenu/mobileMenu.module.css";
import "../../../src/index.css";
import profile from "../../images/profile.svg";
import live from "../../images/live.svg";
import post from "../../images/plane.svg";

const MobileMenu = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={live} />
        <div className={css.title}>live</div>
      </div>
      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={post} />
        <div className={css.title}>post</div>
      </div>
      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={profile} />
        <div className={css.title}>profile</div>
      </div>
    </div>
  );
};

export default MobileMenu;
