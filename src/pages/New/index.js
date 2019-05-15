import React, { useState, useEffect } from "react";
import Location from "../../components/Location";
import PostForm from "../../components/PostForm";
import MobileHeader from "../../components/MobileHeader";
import css from "./New.module.css";

import "../../index.css";
import { CssBaseline } from "@material-ui/core";

const Post = props => {
  const [location, setLocation] = useState({});
  // const [zoom, setZoom] = useState(props.zoom);

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
      <h1 className={css.header}>Post</h1>
      <div className={css.mapContainer}>
        <Location
          zoom={15}
          lat={location.lat}
          long={location.long}
          current={true}
          colour="dodgerblue"
        />
        <PostForm lat={location.lat} long={location.long} />
      </div>
    </div>
  );
};
export default Post;
