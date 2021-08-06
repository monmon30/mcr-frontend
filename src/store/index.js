import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import patient from "./modules/patient";
import global from "./modules/global";
import appointment from "./modules/appointment";
import consultation from "./modules/consultation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    appointment,
    consultation,
    global,
    patient,
  },
});
