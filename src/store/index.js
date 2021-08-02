import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import patient from "./modules/patient";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    patient,
  },
});
