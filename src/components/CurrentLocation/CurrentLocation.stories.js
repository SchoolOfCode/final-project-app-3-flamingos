import React from "react";
import { storiesOf } from "@storybook/react";

import CurrentLocation from ".";

storiesOf("CurrentLocation", module)
    .add("Desktop", () => <CurrentLocation />)
    .add("Mobile", () => <CurrentLocation />, {
        viewport: { defaultViewport: "iphone5" }
    });
