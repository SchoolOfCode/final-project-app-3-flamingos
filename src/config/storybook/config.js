import { configure, addParameters, addDecorator } from "@storybook/react";
import watu from "./watu";

// import StoryRouter from 'storybook-react-router';
// addDecorator(StoryRouter());

addParameters({
    options: {
        theme: watu
    },
    viewport: "responsive"
});

const components = require.context("../../components", true, /\.stories\.js$/);

const pages = require.context("../../pages", true, /\.stories\.js$/);

function loadStories() {
    components.keys().forEach(filename => components(filename));
    pages.keys().forEach(filename => pages(filename));
}

configure(loadStories, module);
