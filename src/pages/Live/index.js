import React, { useState, useEffect } from "react";
import config from "../../config";
import Location from "../../components/Location";
import css from "./Live.module.css";
// import { LoggedInContext } from "../../components/LoggedInContext";

import io from "socket.io-client";
import "../../index.css";
import MobileHeader from "../../components/MobileHeader";
import SinglePost from "../../components/SinglePost";
// import MobileMenu from "../../components/MobileMenu";
// import Footer from "../../components/Footer";

const socket = io(config.SOC_URL, { transports: ["websocket"] });

const Live = props => {
  // const { isLoggedIn } = useContext(LoggedInContext);
  const [location, setLocation] = useState({});
  const [postList, setPostList] = useState([]);
  // const [zoom, setZoom] = useState(props.zoom);

  async function fetchData() {
    const response = await fetch(config.POSTS_GET);
    const data = await response.json();
    setPostList(data);
  }

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        });
      });
    }
  }, []);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error({ fetch: err });
    }
  }, []);

  useEffect(() => {
    socket.on("post", post => {
      fetchData();
    });
  }, []);

  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <div className="page-wrap">
        <h1 className={css.header}>Live</h1>
        <div className={css.mapContainer}>
          <Location
            className={css.map}
            zoom={12}
            lat={location.lat}
            markers={postList}
            long={location.long}
            current={true}
            colour="dodgerblue"
          />
          <div className={css.postContainer}>
            {postList.map((item, idx) => {
              return <SinglePost history={props.history} post={item} />;
            })}
          </div>
        </div>
      </div>
      <div className={css.footerContainer}>{/* <Footer /> */}</div>
    </div>
  );
};

export default Live;
