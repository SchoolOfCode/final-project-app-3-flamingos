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

// const pages = require("../../src/pages");
const pages = require.context("../../src/pages", true, /\.stories\.js$/);

function loadStories() {
    components.keys().forEach(filename => components(filename));
    pages.keys().forEach(filename => pages(filename));
}

configure(loadStories, module);
