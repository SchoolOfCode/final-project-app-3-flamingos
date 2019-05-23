import React, { useState, useEffect, useContext } from "react";
import config from "../../config";
import Location from "../../components/Location";
import css from "./Live.module.css";
import { LoggedInContext } from "../../components/LoggedInContext";

import io from "socket.io-client";
import "../../index.css";
import MobileHeader from "../../components/MobileHeader";
import SinglePost from "../../components/SinglePost";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";

const socket = io(config.SOC_URL, { transports: ["websocket"] });

const Live = props => {
    const { isLoggedIn } = useContext(LoggedInContext);
    const [location, setLocation] = useState({});
    const [postList, setPostList] = useState([]);
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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(config.POSTS_GET);
            const data = await response.json();
            setPostList(data);
        }
        try {
            fetchData();
        } catch (err) {
            console.error({ fetch: err });
        }
    }, []);

    useEffect(() => {
        socket.on("post", post => {
            setPostList([...postList, post]);
        });
    }, []);

    return isLoggedIn ? (
        <div className={css.mainContainer}>
            <MobileHeader />
            <h1 className={css.header}>live</h1>
            <div className={css.mapContainer}>
                <Location
                    className={css.map}
                    zoom={12}
                    lat={location.lat}
                    long={location.long}
                    markers={postList}
                    current={true}
                    colour="dodgerblue"
                />
                <div className={css.postContainer}>
                    <div className={css.postScrollContainer}>
                        {console.log(postList)}
                        {postList.reverse().map((item, idx) => {
                            //do the date conversion here and pass on to post                          
                            const newDate = new Date(item.createdAt)
                            const newTime = new Date(item.updatedAt)
                            item.createdAt = newDate.toDateString()
                            item.updatedAt = newTime.toTimeString().slice(0, 8)
                            console.log(newDate)
                            return <SinglePost post={item}/>;
                        })}
                    </div>
                </div>
                <div className={css.mobileMenuContainer}>
                    <MobileMenu />
                </div>
            </div>
        </div>
    ) : (
        <div className={css.mainContainer}>
            <MobileHeader />
            <h1 className={css.header}>live</h1>
            <div className={css.mapContainer}>
                <Location
                    className={css.map}
                    zoom={12}
                    lat={location.lat}
                    long={location.long}
                    markers={postList}
                    current={true}
                    colour="dodgerblue"
                />
                <div className={css.postContainer}>
                    <div className={css.postScrollContainer}>
                        {console.log(postList)}
                        {postList.map((item, idx) => {
                            return <SinglePost post={item} />;
                        })}
                    </div>
                </div>
            </div>
            <div className={css.footerContainer}>{/* <Footer /> */}</div>
        </div>
    );
};

export default Live;
