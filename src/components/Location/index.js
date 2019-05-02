import React from "react";
import css from "./Location.module.css";

import GoogleMapReact from "google-map-react";

const config = {
    gMapsAPIkey: process.env.REACT_APP_GMAPS_KEY
};

const Location = props => {
    return (
        // Important! Always set the container height explicitly
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: config.gMapsAPIkey
                }}
                center={{ lat: props.lat, lng: props.long }}
                zoom={props.zoom}
            />
        </div>
    );
};

export default Location;
