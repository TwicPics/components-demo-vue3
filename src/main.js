import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import TwicPics from "@twicpics/components/vue3";
import "@twicpics/components/style.css";

import TwicAbstract from "./components/demo-wrapper/TwicAbstract.vue";
import TwicCode from "./components/demo-wrapper/TwicCode.vue";
import TwicWrapper from "./components/demo-wrapper/TwicWrapper.vue";

const app = createApp(App);

app.use(TwicPics, {
  domain: `https://demo.twic.pics`,
  anticipation: 0.5,
  step: 100,
});
app.component("Code", TwicCode);
app.component("TwicAbstract", TwicAbstract);
app.component("TwicWrapper", TwicWrapper);

app.use(router);

app.mount("#app");
