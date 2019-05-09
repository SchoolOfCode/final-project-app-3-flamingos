import React from "react";
import css from "./Location.module.css";
import Marker from "../Marker";
import Current from "../Current";
import GoogleMapReact from "google-map-react";
import config from "../../config";

const GmapsAPIkey = config.GMAPS_API_KEY || process.env.STORYBOOK_GMAPS_KEY;

const Location = props => {
    return (
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: GmapsAPIkey
                }}
                center={{ lat: props.lat, lng: props.long }}
                zoom={props.zoom}
            >
                {props.markers &&
                    props.markers.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                lat={marker.latitude}
                                lng={marker.longitude}
                                colour={
                                    marker.postCategory === "travel"
                                        ? "green"
                                        : marker.postCategory === "crime"
                                        ? "blue"
                                        : marker.postCategory === "emergency"
                                        ? "red"
                                        : "black"
                                }
                            />
                        );
                    })}

                {props.current && (
                    <Current
                        lat={props.lat}
                        lng={props.long}
                        colour={props.colour}
                    />
                )}
            </GoogleMapReact>
        </div>
    );
};

export default Location;
