const GMAPS_API_KEY =
    process.env.REACT_APP_GMAPS_KEY || process.env.STORYBOOK_GMAPS_KEY;
const API_URL = process.env.REACT_APP_API_URL;
const SOC_URL = process.env.REACT_APP_SOCKET_URL;

module.exports = {
    GMAPS_API_KEY,
    SOC_URL,
    API_URL
};
