import "./assets/main.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ui } from "./components/ui/config";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, ui);

app.mount("#app");
