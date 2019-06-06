import React, { useContext, useState, useEffect } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import css from "./Profile.module.css";
import MobileHeader from "../../components/MobileHeader";
import MobileMenu from "../../components/MobileMenu";
import headShot from "../../images/headshot.jpg";
import config from "../../config";

const Profile = props => {
  const { isLoggedIn, logout } = useContext(LoggedInContext);
  const [userData, setUserData] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await fetch(`${config.USERS_GET}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token
          })
        });
        let data = await res.json();
        await setUserData(data);
      }
      fetchData();
    } catch (err) {
      console.log({ fetch: err });
    }
  }, []);

  return (
    <div className={css.mainContainer}>
      {console.log(userData)}
      <MobileHeader />
      <div className="page-wrap">
        <div className={css.detailContainer}>
          <div className={css.profilePhoto}>
            <img className={css.photo} src={headShot} alt="headshot" />
          </div>
          <div className={css.profileText}>
            <h1 className={css.mainName}>{userData.name}</h1>
            <div className={css.tabletContainer}>
              <div className={css.nameTitle}>name</div>
              <div className={css.infoContainer}>{userData.name}</div>
              <div className={css.nameTitle}>screen name</div>
              <div className={css.infoContainer}>{userData.displayName}</div>
              <div className={css.nameTitle}>mobile number</div>
              <div className={css.infoContainer}>{userData.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
