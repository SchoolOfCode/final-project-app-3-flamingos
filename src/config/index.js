const GMAPS_API_KEY =
    process.env.REACT_APP_GMAPS_KEY || process.env.STORYBOOK_GMAPS_KEY;
const API_URL = process.env.REACT_APP_AUTHENTICATE;
const SOC_URL = process.env.REACT_APP_SOCKET_URL;
const POST_TEST = process.env.REACT_APP_TEST_LINK;
const POSTS_ADD = process.env.REACT_APP_POSTS_ADD;
const CONFIRM_POST_API = process.env.REACT_APP_POSTS_CONFIRM;
const REACT_APP_ADD_USER = process.env.REACT_APP_ADD_USER;
const CLOUD_URL = process.env.REACT_APP_CLOUD_URL;
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
const CLOUD_KEY = process.env.REACT_APP_CLOUD_KEY;
const SIGN_IMAGE = process.env.REACT_APP_SIGN_IMAGE;

module.exports = {
    GMAPS_API_KEY,
    SOC_URL,
    API_URL,
    POST_TEST,
    CONFIRM_POST_API,
    REACT_APP_ADD_USER,
    CLOUD_URL,
    CLOUD_NAME,
    CLOUD_KEY,
    SIGN_IMAGE,
    POSTS_ADD
};
