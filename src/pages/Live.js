import React, { useState, useEffect } from "react";
import config from "../config";
import Location from "../components/Location";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

import "../index.css";

const Post = props => {
    const [location, setLocation] = useState({});
    const [posts, setPosts] = useState(false);
    // const [zoom, setZoom] = useState(props.zoom);

    useEffect(() => {
        fetch(`${config.API_URL}/posts`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setPosts(data.payload))
            .catch(err => console.error(err));

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
        <div id="live">
            <Logo />
            <Location
                zoom={12}
                lat={location.lat}
                long={location.long}
                markers={posts}
                current={true}
                colour="dodgerblue"
            />
            <Nav />
        </div>
    );
};

export default Post;
