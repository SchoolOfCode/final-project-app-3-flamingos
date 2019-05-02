import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import PostForm from "../components/PostForm";
import Nav from "../components/Nav";

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
        <div>
            <Location zoom={11} lat={location.lat} long={location.long} />;
            <PostForm lat={location.lat} long={location.long} />
            <Nav />
        </div>
    );
};
export default Post;
