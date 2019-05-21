import React, { useState, useEffect } from "react";
import config from "../../config";
import Location from "../../components/Location";
import css from "./Live.module.css";

import io from "socket.io-client";

import "../../index.css";
import MobileHeader from "../../components/MobileHeader";
import SinglePost from "../../components/SinglePost";
import MobileMenu from "../../components/MobileMenu";

const socket = io(config.SOC_URL, { transports: ["websocket"] });

const Live = props => {
  const [location, setLocation] = useState({});
  const [posts, setPosts] = useState([]);
  const [postList, setPostList] = useState([]);
  // const [zoom, setZoom] = useState(props.zoom);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://j0nn.io/function/watu-posts-get");
      const data = await response.json();
      setPostList(data);
    }
    try {
      fetchData();
    } catch (err) {
      console.error({ fetch: err });
    }
  }, []);

  useEffect(() => {
    socket.on("post", post => {
      setPostList([...postList, post]);
    });
  }, [postList]);

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

  return (
    <div className={css.mainContainer}>
      <MobileHeader />
      <h1 className={css.header}>live</h1>
      <div className={css.mapContainer}>
        <Location
          className={css.map}
          zoom={12}
          lat={location.lat}
          long={location.long}
          markers={postList}
          current={true}
          colour="dodgerblue"
        />
        <div className={css.postContainer}>
          <h3 className={css.postHeader}>This is post Header</h3>
          <div className={css.postScrollContainer}>
            {console.log(postList)}
            {postList.map((item, idx) => {
              return <SinglePost post={item} />;
            })}
          </div>
        </div>
        <div className={css.mobileMenuContainer}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Live;
