import React, { useState, useEffect } from "react";
import config from "../config";
import Location from "../components/Location";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

import io from "socket.io-client";

import "../index.css";

const socket = io(config.SOC_URL, { transports: ["websocket"] });

const Live = props => {
    const [location, setLocation] = useState({});
    const [posts, setPosts] = useState([]);
    // const [zoom, setZoom] = useState(props.zoom);

    useEffect(() => {
        socket.on("post", msg => {
            setPosts([...posts, msg]);
        });

        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                setLocation({
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                });
            });
        }
    }, [posts]);

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

export default Live;
