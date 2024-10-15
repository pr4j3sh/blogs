import "./assets/main.css";
import PrimeVue from "primevue/config";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Noir } from "./components/themes/Noir";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Noir,
  },
});

app.mount("#app");
