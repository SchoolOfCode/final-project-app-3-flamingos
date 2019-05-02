import React from "react";
import { storiesOf } from "@storybook/react";

import Home from "./Home.js";
import Post from "./Post.js";
import Live from "./Live.js";

storiesOf("Pages|Home", module)
    .add("Desktop", () => <Home />)
    .add("Mobile", () => <Home />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Post", module)
    .add("Desktop", () => <Post />)
    .add("Mobile", () => <Post />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Live", module)
    .add("Desktop", () => <Live />)
    .add("Mobile", () => <Live />, {
        viewport: { defaultViewport: "iphone5" }
    });
