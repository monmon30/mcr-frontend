import { useFetch, usePost } from "../../custom_hooks";
import store from "../../store";

const state = () => ({
  users: [],
  loading: false,
});

const getters = {
  GET_USERS: state => state.users,
  GET_LOADING: state => state.loading,
};

const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },

  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    commit("SET_LOADING", true);
    const { data, loading } = await useFetch("/users");
    await commit("SET_USERS", data);
    await commit("SET_LOADING", loading);
  },

  async createUser({ commit, state }, form) {
    commit("SET_LOADING", true);
    const { data, loading } = await usePost("/users", form);
    await state.users.unshift(data);
    await commit("SET_LOADING", loading);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
