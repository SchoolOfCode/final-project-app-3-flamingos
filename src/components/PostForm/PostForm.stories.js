import React from "react";
import { storiesOf } from "@storybook/react";

import PostForm from ".";

storiesOf("Components|PostForm", module)
    .add("Desktop", () => <PostForm />)
    .add("Mobile", () => <PostForm />, {
        viewport: { defaultViewport: "iphone5" }
    });
