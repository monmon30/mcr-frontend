import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
axios.defaults.headers.common["Authorization"] = store.state.auth.accessToken;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
