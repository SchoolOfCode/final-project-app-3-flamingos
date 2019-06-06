import React, { useState, useEffect } from "react";
// import { LoggedInContext } from "../../components/LoggedInContext";
import css from "./Profile.module.css";
import MobileHeader from "../../components/MobileHeader";
// import MobileMenu from "../../components/MobileMenu";
// import headShot from "../../images/headshot.jpg";
import config from "../../config";

const Profile = props => {
  // const { isLoggedIn, logout } = useContext(LoggedInContext);
  const [userData, setUserData] = useState(false);

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
      <MobileHeader />
      <div className="page-wrap">
        <div className={css.profileContainer}>
          <div className={css.left}>
            {userData && <div className={css.avatar}>{`${userData.name.split(" ")[0].split("")[0]}${userData.name.split(" ")[1].split("")[0]}`}</div>}
            <h1 className={css.hname}>{userData.name}</h1>
          </div>
          <div className={css.right}>
            <div className={css.userInfo}><span className={css.label}>name:</span><span className={css.data}>{userData.name}</span></div>
            <div className={css.userInfo}><span className={css.label}>screen name:</span><span className={css.data}>{userData.displayName}</span></div>
            <div className={css.userInfo}><span className={css.label}>mobile number:</span><span className={css.data}>{userData.phone}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
