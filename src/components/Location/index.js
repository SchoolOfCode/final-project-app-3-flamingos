import React from "react";
import css from "./Location.module.css";

import GoogleMapReact from "google-map-react";
const APIkey =
    process.env.REACT_APP_GMAPS_KEY || process.env.STORYBOOK_GMAPS_KEY;

const Location = props => {
    return (
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: APIkey
                }}
                center={{ lat: props.lat, lng: props.long }}
                zoom={props.zoom}
            />
        </div>
    );
};

export default Location;
