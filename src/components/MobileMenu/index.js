import React from "react";
import css from "../MobileMenu/mobileMenu.module.css";
import "../../../src/index.css";
import profile from "../../images/profile.svg";
import live from "../../images/live.svg";
import post from "../../images/plane.svg";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={live} />
        <Link to="/live">
          <div className={css.title}>live</div>
        </Link>
      </div>

      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={post} />
        <Link to="/new">
          <div className={css.title}>post</div>
        </Link>
      </div>
      <div className={css.itemContainer}>
        <img className={css.imageIcon} src={profile} />
        <Link to="/profile">
          <div className={css.title}>profile</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
