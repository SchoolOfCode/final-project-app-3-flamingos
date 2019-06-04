import React, { useContext } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import css from "./Profile.module.css";
import MobileHeader from "../../components/MobileHeader";
import MobileMenu from "../../components/MobileMenu";
import headShot from "../../images/headshot.jpg";

const Profile = props => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);

  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <div className="page-wrap">
      <div className={css.detailContainer}>
        <div className={css.profilePhoto} />
        <img className={css} src={headShot} alt="headshot"/>
      </div>
      <div className={css.menu}>
      </div></div>
    </div>
  );
};

export default Profile;
