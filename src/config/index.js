const GMAPS_API_KEY =
    process.env.REACT_APP_GMAPS_KEY || process.env.STORYBOOK_GMAPS_KEY;
const SOC_URL = process.env.REACT_APP_SOCKET_URL;
const CLOUD_KEY = process.env.REACT_APP_CLOUD_KEY;
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
const CLOUD_URL = process.env.REACT_APP_CLOUD_URL;
const AUTHENTICATE = process.env.REACT_APP_AUTHENTICATE;
const POSTS_ADD = process.env.REACT_APP_POSTS_ADD;
const POSTS_COMMENTS = process.env.REACT_APP_POSTS_COMMENTS;
const POSTS_CONFIRM = process.env.REACT_APP_POSTS_CONFIRM;
const POSTS_GET = process.env.REACT_APP_POSTS_GET;
const SIGN_IMAGE = process.env.REACT_APP_SIGN_IMAGE;
const USERS_ADD = process.env.REACT_APP_USERS_ADD;
const USERS_GET = process.env.REACT_APP_USERS_GET;
const USERS_UPDATE = process.env.REACT_APP_USER_UPDATE;

module.exports = {
    AUTHENTICATE,
    CLOUD_KEY,
    CLOUD_NAME,
    CLOUD_URL,
    GMAPS_API_KEY,
    SOC_URL,
    POSTS_ADD,
    POSTS_COMMENTS,
    POSTS_CONFIRM,
    POSTS_GET,
    SIGN_IMAGE,
    USERS_ADD,
    USERS_UPDATE,
    USERS_GET
};
