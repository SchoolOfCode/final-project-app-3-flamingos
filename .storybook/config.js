import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

addParameters({
    options: {
        theme: themes.dark
    }
});

const components = require.context("../src/components", true, /\.stories\.js$/);
function loadStories() {
    components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
