import React from "react";
import { storiesOf } from "@storybook/react";

import Location from ".";

storiesOf("Components|Location", module)
    // .add("Desktop", () => <Location />)
    // .add("Mobile", () => <Location />, {
    //     viewport: { defaultViewport: "iphone5" }
    // })
    .add("B'ham Desktop", () => (
        <Location zoom={11} lat={52.47547} long={-1.88357} />
    ))
    .add(
        "B'ham Mobile",
        () => <Location zoom={11} lat={52.47547} long={-1.88357} />,
        {
            viewport: { defaultViewport: "iphone5" }
        }
    )
    .add("Barcelona Desktop", () => (
        <Location zoom={11} lat={41.3851} long={-2.1734} />
    ))
    .add(
        "Barcelona Mobile",
        () => <Location zoom={11} lat={41.3851} long={-2.1734} />,
        {
            viewport: { defaultViewport: "iphone5" }
        }
    ).add("B'ham Desktop w/ Current", () => (
        <Location zoom={11} lat={52.47547} long={-1.88357} current={true} colour="dodgerblue"/>
    ))
    .add(
        "B'ham Mobile  w/ Current",
        () => <Location zoom={11} lat={52.47547} long={-1.88357} current={true} colour="dodgerblue"/>,
        {
            viewport: { defaultViewport: "iphone5" }
        }
    ).add("B'ham Desktop w/ Marker", () => (
        <Location zoom={11} lat={52.47547} long={-1.88357} markers={[{lat: 52.46, long: -1.90, colour: "red"}]}/>
    ))
    .add(
        "B'ham Mobile  w/ Marker",
        () => <Location zoom={11} lat={52.47547} long={-1.88357} markers={[{lat: 52.46, long: -1.90, colour: "red"}]}/>,
        {
            viewport: { defaultViewport: "iphone5" }
        }
    )
