import React from "react";
import { storiesOf } from "@storybook/react";

import Marker from ".";

storiesOf("Components|Marker", module)
.add("Marker", () => <Marker />)
.add("Marker (red)", () => <Marker colour="salmon"/>);
