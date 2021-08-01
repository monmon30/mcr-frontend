import { useFetch, usePost } from "../../custom_hooks";
import axios from "axios";
import router from "../../router";
import { ROLES } from "../../constants";

const state = () => ({
  accessToken: sessionStorage.getItem("_token"),
  user: null,
});

const getters = {
  GET_ACCESS_TOKEN: state => state.accessToken,
  GET_USER: state => state.user,
};

const mutations = {
  SET_ACCESS_TOKEN(state, payload) {
    sessionStorage.setItem("_token", payload);
    state.accessToken = payload;
  },

  SET_USER(state, payload) {
    state.user = payload;
  },
};

const actions = {
  async fetchAuthUser({ commit }) {
    const response = await useFetch("/auth/user");
    commit("SET_USER", response.data);
    return response;
  },

  async login({ commit, state, dispatch }, form) {
    const { data, isError: isErrorLogin } = await usePost("/auth/login", form);
    await commit("SET_ACCESS_TOKEN", `${data.token_type} ${data.access_token}`);
    axios.defaults.headers.common["Authorization"] = state.accessToken;
    const { isError: isErrorFetchUser } = await dispatch("fetchAuthUser");
    if (!isErrorLogin && !isErrorFetchUser) {
      router.push({ name: "Redirect" });
    } else {
      throw "Invalid Credentials";
    }
  },

  async logout({ commit }) {
    await usePost("/auth/logout");
    sessionStorage.removeItem("_token");
    await commit("SET_USER", null);
    await commit("SET_ACCESS_TOKEN", null);
  },

  async redirect({ state }) {
    const [ADMIN, PHYSICIAN, ENCODER] = ROLES;
    let roles = await state.user.attributes.roles;

    if (roles == ADMIN) return router.push({ name: ADMIN });
    if (roles == PHYSICIAN) return router.push({ name: PHYSICIAN });
    if (roles == ENCODER) return router.push({ name: ENCODER });
    return router.push({ name: "Home" });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
