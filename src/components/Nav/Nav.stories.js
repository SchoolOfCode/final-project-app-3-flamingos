import React from "react";
import { storiesOf } from "@storybook/react";

import Nav from ".";

storiesOf("Components|Nav", module)
    .add("Desktop", () => <Nav />)
    .add("Mobile", () => <Nav />, {
        viewport: { defaultViewport: "iphone5" }
    });
