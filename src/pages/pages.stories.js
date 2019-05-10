import React from "react";
import { storiesOf } from "@storybook/react";

import Home from "./Home.js";
import Live from "./Live.js";
import Login from "./Login.js";
import New from "./New.js";
import Post from "./Post.js";
import Register from "./Register.js";

storiesOf("Pages|Home", module)
    .add("Desktop", () => <Home />)
    .add("Mobile", () => <Home />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Live", module)
    .add("Desktop", () => <Live />)
    .add("Mobile", () => <Live />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Login", module)
    .add("Desktop", () => <Login />)
    .add("Mobile", () => <Login />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|New", module)
    .add("Desktop", () => <New />)
    .add("Mobile", () => <New />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Post", module)
    // post id passed as props WtbI9bX3lE
    .add("Desktop", () => <Post match={{ params: { id: "WtbI9bX3lE" } }} />)
    .add("Mobile", () => <Post match={{ params: { id: "WtbI9bX3lE" } }} />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Register", module)
    .add("Desktop", () => <Register />)
    .add("Mobile", () => <Register />, {
        viewport: { defaultViewport: "iphone5" }
    });
