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
    const [post, setPost] = useState([false]);
    const [postId, setPostId] = useState(false);
    const [addComment, setAddComment] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLocation({
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            });
        });
        setPostId(props.match.params.id);
    }, []);

    useEffect(() => {
        try {
            async function fetchData() {
                if (postId) {
                    let res = await fetch(`${config.POSTS_GET}`, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            postId
                        })
                    });
                    let data = await res.json();
                    await setPost([data]);
                }
            }
            fetchData();
        } catch (err) {
            console.log({ fetch: err });
        }
    }, [postId]);

    useEffect(() => {
        socket.on("comment", socketData => {
            console.log(socketData);
            // socket.on(`${postId}`, post => {
            // setPost([post]);
        });
    }, []);

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
                    <AddComment postId={postId} setPost={setPost} />
                ) : (
                    <button onClick={() => setAddComment(true)}>
                        add a comment
                    </button>
                )}
            </div>
        </div>
    );
};

export default ShowPosts;
