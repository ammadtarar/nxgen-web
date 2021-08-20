const Notifications = require("../controllers/Notifications.js");

import axios from "axios";
const baseURL = "http://api.nxgenlabs.com.pk:16992/";

axios.defaults.baseURL = baseURL;

const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API,
    // responseType: "json",http://api.nxgenlabs.com.pk:16992/api/create-user
});

HTTP.interceptors.request.use(
    function (config) {
        Notifications.showLoading();
        const token = localStorage.getItem("id_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

HTTP.interceptors.response.use(
    (response) => {
        Notifications.hideLoading();
        return response;
    },
    (error) => {
        Notifications.hideLoading();
        if (error.response && error.response.data) {
            Notifications.showNotification("danger", error.response.data.error_description);
        } else {
            Notifications.showNotification("danger", error.message);
        }

        // if (
        //     error.response.config.url !== "api/authenticate" &&
        //     error.response.status === 401
        // ) {
        //     localStorage.removeItem("roles");
        //     localStorage.removeItem("id_token");
        //     location.reload();
        //     alert("Session timeout");
        //     return;
        // }
        throw error;
    }
);

const URLS = {
    baseURL: baseURL,
    AUTH: {
        REGISTER: "api/create-user",
        LOGIN: "Token"
    },
    RATE_LIST: 'api/services-list',
    PACKAGES_LIST: 'api/services-profile',
    APPOINTMENT: {
        SAVE: 'appointment-save',
        EDIT: 'appointment-edit',
        CANCEL: 'appointment-cancel'
    }

};

export { HTTP, URLS };
