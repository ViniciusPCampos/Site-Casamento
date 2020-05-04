import Vue from "vue";
import App from "./App.vue";
// import VueCountdown from '@chenfengyuan/vue-countdown';
import "./sass/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as VueGoogleMaps from "vue2-google-maps";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places", // necessary for places input
  },
});

Vue.config.productionTip = false;
// Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
