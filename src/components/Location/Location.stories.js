import React from "react";
import { storiesOf } from "@storybook/react";

import Location from ".";

storiesOf("Location", module)
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
    );
