import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

import "../index.css";

const Post = props => {
    const [location, setLocation] = useState({});
    // const [markers, setMarkers] = useState([]);
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
        <div id="live">
            <Logo />
            <Location
                zoom={12}
                lat={location.lat}
                long={location.long}
                markers={[
                    { lat: 52.45, long: -1.86, colour: "red" },
                    { lat: 52.46, long: -1.87, colour: "green" },
                    { lat: 52.48, long: -1.89, colour: "blue" }
                ]}
                current={true}
                colour="dodgerblue"
            />
            <Nav />
        </div>
    );
};

export default Post;
