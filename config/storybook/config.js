import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import watu from "./watu";
//import { themes } from "@storybook/theming";

addParameters({
    options: {
        theme: watu
        // theme: themes.dark
    },
    viewport: "responsive"
});

const components = require.context(
    "../../src/components",
    true,
    /\.stories\.js$/
);
function loadStories() {
    components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
