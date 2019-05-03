import React from "react";
import { storiesOf } from "@storybook/react";

import Current from ".";

storiesOf("Components|Current", module)
.add("Current", () => <Current />)
.add("Current (blue)", () => <Current colour="dodgerblue" />)

