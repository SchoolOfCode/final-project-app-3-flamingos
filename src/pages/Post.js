import React, { useState, useEffect } from "react";
import config from "../config";
import Location from "../components/Location";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import ShowPost from "../components/ShowPost";
import AddComment from "../components/AddComment";

import "../index.css";

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
    }, [postId]);

    return (
        <div id="posts">
            <Logo />
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
            {post && <ShowPost posts={post} />}
            {addComment ? (
                <AddComment />
            ) : (
                <button onClick={() => setAddComment(true)}>+</button>
            )}
            <Nav />
        </div>
    );
};

export default ShowPosts;
