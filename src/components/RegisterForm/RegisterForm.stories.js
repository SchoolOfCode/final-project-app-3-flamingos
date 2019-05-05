import React from "react";
import { storiesOf } from "@storybook/react";

import RegisterForm from ".";

storiesOf("Components|RegisterForm", module)
    .add("Desktop", () => <RegisterForm />)
    .add("Mobile", () => <RegisterForm />, {
        viewport: { defaultViewport: "iphone5" }
    });
