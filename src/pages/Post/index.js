import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import config from "../../config";
import Location from "../../components/Location";
import ShowPost from "../../components/ShowPost";
import AddComment from "../../components/AddComment";
import MobileHeader from "../../components/MobileHeader";
import MobileMenu from "../../components/MobileMenu";
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
            if (postId === Object.keys(socketData)[0]) {
                setPost([socketData[postId]]);
            } else {
                return;
            }
        });
    }, [postId]);

    return LoggedInContext.isLoggedIn ? (
        <div className={css.mainContainer}>
            <MobileHeader />
            <h1 className={css.header}>{post.description}</h1>
            <div className={css.mapContainer}>
                <Location
                    className={css.map}
                    zoom={12}
                    lat={location.lat}
                    long={location.long}
                    markers={post}
                    current={true}
                    colour="dodgerblue"
                />
                <div className={css.postContainer}>
                    <div className={css.postScrollContainer}>
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
                <div className={css.mobileMenuContainer}>
                    <MobileMenu />
                </div>
            </div>
        </div>
    ) : (
        <div className={css.mainContainer}>
            <MobileHeader />
            <h1 className={css.header}>{post.description}</h1>
            <div className={css.mapContainer}>
                <Location
                    className={css.map}
                    zoom={12}
                    lat={location.lat}
                    long={location.long}
                    markers={post}
                    current={true}
                    colour="dodgerblue"
                />
                <div className={css.postContainer}>
                    <div className={css.postScrollContainer}>
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
            </div>
            <div className={css.footerContainer}>{/* <Footer /> */}</div>
        </div>
    );
};

export default ShowPosts;
