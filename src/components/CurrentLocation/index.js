import React, { useState, useEffect } from "react";
import Location from "../Location";

const CurrentLocation = props => {
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
    return <Location zoom={11} lat={location.lat} long={location.long} />;
};

export default CurrentLocation;
