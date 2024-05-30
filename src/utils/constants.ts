export let API_BASE_URL = "https://zodfromdeepweb.com/wp-json/wp/v2/";
// export let API_BASE_URL = "";
export const MAX_POSTS_PER_PAGE = 10;
export const APP_NAME = "WP INTEGRATOR BY ZEESHAN";
// export const DEFAULT_THEME_COLOR = "#0077C0";

export const setApiBaseUrl = (url: string) => {
    API_BASE_URL = url;
};

export const getApiBaseUrl = () => {
    return API_BASE_URL;
};