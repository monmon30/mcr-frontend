import { useFetch, usePost } from "../../custom_hooks";
import axios from "axios";

const state = () => ({
  accessToken: sessionStorage.getItem("_token"),
  user: null,
});

const getters = {
  GET_ACCESS_TOKEN: state => state.accessToken,
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
    const { data, isError } = await useFetch("/auth/user");
    commit("SET_USER", data);
    if (isError) {
      console.error("wala kang token men.");
    }
  },
  async login({ commit, state, dispatch }, form) {
    const { data } = await usePost("/auth/login", form);
    await commit("SET_ACCESS_TOKEN", `${data.token_type} ${data.access_token}`);
    axios.defaults.headers.common["Authorization"] = state.accessToken;
    await dispatch("fetchAuthUser");
  },

  async logout({ commit }) {
    await usePost("/auth/logout");
    sessionStorage.removeItem("_token");
    await commit("SET_USER", null);
    await commit("SET_ACCESS_TOKEN", null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
