import React from "react";
import css from "./Location.module.css";

import GoogleMapReact from "google-map-react";

console.log({ gKey: process.env.REACT_APP_GMAPS_KEY });

const Location = props => {
    return (
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GMAPS_KEY
                }}
                center={{ lat: props.lat, lng: props.long }}
                zoom={props.zoom}
            />
        </div>
    );
};

export default Location;
