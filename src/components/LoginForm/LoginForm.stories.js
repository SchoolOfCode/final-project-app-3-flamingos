import React from "react";
import { storiesOf } from "@storybook/react";

import LoginForm from ".";

storiesOf("Components|LoginForm", module)
    .add("Desktop", () => <LoginForm />)
    .add("Mobile", () => <LoginForm />, {
        viewport: { defaultViewport: "iphone5" }
    });
