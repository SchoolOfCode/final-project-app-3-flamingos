const GMAPS_API_KEY =
  process.env.REACT_APP_GMAPS_KEY || process.env.STORYBOOK_GMAPS_KEY;
const API_URL = process.env.REACT_APP_AUTHENTICATE;
const SOC_URL = process.env.REACT_APP_SOCKET_URL;
const POST_TEST = process.env.REACT_APP_TEST_LINK;
const CONFIRM_POST_API = process.env.REACT_APP_POSTS_CONFIRM;
const REACT_APP_ADD_USER = process.env.REACT_APP_ADD_USER;

module.exports = {
  GMAPS_API_KEY,
  SOC_URL,
  API_URL,
  POST_TEST,
  CONFIRM_POST_API,
  REACT_APP_ADD_USER
};
