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
    const [post, setPost] = useState();
    const [postId, setPostId] = useState("");
    const [addComment, setAddComment] = useState(false);

    useEffect(() => {
        const urlParams = props.location.pathname.split("/");
        setPostId(urlParams[urlParams.length - 1]);

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
        fetch(`${config.API_URL}/posts/${postId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setPost(data.payload))
            .catch(err => console.error(err));
    }, [postId]);

    return (
        <div id="posts">
            <Logo />
            {post && (
                <Location
                    zoom={12}
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
