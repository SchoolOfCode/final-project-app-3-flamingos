import React from "react";
import css from "./Location.module.css";

import GoogleMapReact from "google-map-react";

const Location = props => {
    return (
        // Important! Always set the container height explicitly
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyD49JgHDhlWXlpMtIm2uG-_0gSWN4DHBJ0"
                }}
                center={{ lat: props.lat, lng: props.long }}
                zoom={props.zoom}
            />
        </div>
    );
};

export default Location;
