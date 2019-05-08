import React from "react";
import css from "./Location.module.css";
import Marker from "../Marker";
import Current from "../Current";
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
            >
                {props.markers
                    ? props.markers.map((marker, index) => {
                          return (
                              <Marker
                                  key={index}
                                  lat={marker.latitude}
                                  lng={marker.longitude}
                                  colour={
                                      marker.postCategory === "travel"
                                          ? "darkbrown"
                                          : marker.postCategory === "crime"
                                          ? "darkblue"
                                          : marker.postCategory === "emergency"
                                          ? "darkgreen"
                                          : "black"
                                  }
                              />
                          );
                      })
                    : null}
                {props.current ? (
                    <Current
                        lat={props.lat}
                        lng={props.long}
                        colour={props.colour}
                    />
                ) : null}
            </GoogleMapReact>
        </div>
    );
};

export default Location;
