import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import config from "../../config";
import Location from "../../components/Location";
import ShowPost from "../../components/ShowPost";
import AddComment from "../../components/AddComment";
import MobileHeader from "../../components/MobileHeader";
import css from "./Post.module.css";
import "../../index.css";
import { LoggedInContext } from "../../components/LoggedInContext";

const socket = io(config.SOC_URL, { transports: ["websocket"] });
const ShowPosts = props => {
  const [location, setLocation] = useState({});
  const [post, setPost] = useState(false);
  const [postId, setPostId] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const urlParams = props.match.params.id;

  useEffect(() => {
    setPostId(urlParams);
    // if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      });
    });
    // }
  }, [urlParams]);

  useEffect(() => {
    try {
      async function fetchData() {
        // if (postId) {
        let res = await fetch(`${config.API_URL}/posts/${postId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });
        let data = await res.json();
        setPost(data.payload);
        // }
      }
      fetchData();
    } catch (err) {
      console.log({ fetch: err });
    }

    socket.on(`${postId}`, post => {
      setPost([post]);
    });
  }, [postId]);

  return (
    <div className={css.mainContainer}>
      <div id="posts">
        <MobileHeader />
        <div className={css.mapContainer}>
          <div className={css.map}>
            {post && (
              <Location
                zoom={11}
                lat={location.lat}
                long={location.long}
                markers={post}
                current={true}
                colour="dodgerblue"
              />
            )}
          </div>
        </div>
        {post && <ShowPost posts={post} />}
        {addComment ? (
          <AddComment postId={postId} />
        ) : (
          <button onClick={() => setAddComment(true)}>+</button>
        )}
      </div>
    </div>
  );
};

export default ShowPosts;
