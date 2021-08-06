import { useFetch } from "../../custom_hooks";

const state = () => ({
  appointments: null,
  loading: false,
});

const getters = {
  GET_APPOINTMENTS: state => state.appointments,
  GET_LOADING: state => state.loading,
};

const mutations = {
  SET_APPOINTMENTS(state, payload) {
    state.appointments = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

const actions = {
  async fetchAppointments({ commit }) {
    commit("SET_LOADING", true);
    const { data, loading } = await useFetch("/appointments");
    commit("SET_LOADING", loading);
    commit("SET_APPOINTMENTS", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
