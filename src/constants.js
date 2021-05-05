const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL

const FIREBASE_SHORTCODES_COLLECTION = "shorts"

module.exports = {
    BASE_URL,
    FIREBASE_SHORTCODES_COLLECTION
}