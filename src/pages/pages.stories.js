import React from "react";
import { storiesOf } from "@storybook/react";

import Four04 from "./Four04";
import Home from "./Home";
import Live from "./Live";
import Login from "./Login";
import New from "./New";
import Post from "./Post";
import Profile from "./Profile";
import Register from "./Register";

storiesOf("Pages|404", module)
    .add("Desktop", () => <Four04 />)
    .add("Mobile", () => <Four04 />, {
        viewport: { defaultViewport: "iphone5" }
    });

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
    // post id passed as props GDfjdtKQI
    .add("Desktop", () => <Post match={{ params: { id: "GDfjdtKQI" } }} />)
    .add("Mobile", () => <Post match={{ params: { id: "GDfjdtKQI" } }} />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Profile", module)
    .add("Desktop", () => <Profile />)
    .add("Mobile", () => <Profile />, {
        viewport: { defaultViewport: "iphone5" }
    });

storiesOf("Pages|Register", module)
    .add("Desktop", () => <Register />)
    .add("Mobile", () => <Register />, {
        viewport: { defaultViewport: "iphone5" }
    });
