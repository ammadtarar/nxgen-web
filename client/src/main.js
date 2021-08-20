import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { HTTP, URLS } from "./controllers/Network";
const Notifications = require("./controllers/Notifications");


const app = createApp(App);
app.use(router);
app.config.globalProperties.$HTTP = HTTP;
app.config.globalProperties.$URLS = URLS;
app.config.globalProperties.$Notifications = Notifications;
app.mount("#app");
