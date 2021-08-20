import { createApp } from "vue";
import App from "./App.vue";

import "./sass/styles.scss";
import store from './store'

createApp(App).use(store).use(store).mount("#app");
