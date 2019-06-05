import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import config from "../../config";
import Location from "../../components/Location";
import SinglePost from "../../components/SinglePost";
import MobileHeader from "../../components/MobileHeader";
import MobileMenu from "../../components/MobileMenu";
import Comments from "../../components/Comments"
import css from "./Post.module.css";
import "../../index.css";


const socket = io(config.SOC_URL, { transports: ["websocket"] });
const ShowPosts = props => {
    const [location, setLocation] = useState({});
    const [post, setPost] = useState([false]);
    const [postId, setPostId] = useState(false);

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

    return (
        <div className={css.mainContainer}>
            <MobileHeader />
            <div className="page-wrap">
                <h1 className={css.header}>Post</h1>
                <div className={css.mapContainer}>
                    <Location
                        className={css.map}
                        zoom={12}
                        lat={location.lat}
                        markers={post}
                        long={location.long}
                        current={true}
                        colour="dodgerblue"
                    />
                    <div className={css.postContainer}>
                        {post[0] && <SinglePost history={props.history} post={post[0]} />}
                        {post[0] && <Comments post={post[0]} setPost={setPost} />}
                    </div>
                    <div className={css.mobileMenuContainer}>
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShowPosts;

