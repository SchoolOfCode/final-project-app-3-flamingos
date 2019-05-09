import React from "react";
import { storiesOf } from "@storybook/react";

import ShowPost from ".";

storiesOf("Components|ShowPost", module)
    .add("ShowPost", () => <ShowPost />)
    .add("Mobile", () => <ShowPost />, {
        viewport: { defaultViewport: "iphone5" }
    });
