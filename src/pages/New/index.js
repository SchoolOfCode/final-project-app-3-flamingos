import React, { useState, useEffect } from "react";
import Location from "../../components/Location";
import PostForm from "../../components/PostForm";
import MobileHeader from "../../components/MobileHeader";
import css from "./New.module.css";
import { Route } from "react-router-dom";

import "../../index.css";
import { CssBaseline } from "@material-ui/core";

const Post = props => {
  const [location, setLocation] = useState({});
  const token = localStorage.getItem("token");
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
  return token ? (
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
  ) : (
    <Route
      render={({ history }) => {
        history.push("/live");
      }}
    />
  );
};
export default Post;
