import { usePost, useFetch } from "../../custom_hooks";
// import axios from "axios";
// import router from "../../router";
// import { ROLES } from "../../constants";

const state = () => ({
  addedPatient: null,
  patients: null,
});

const getters = {
  GET_ADDED_PATIENT: state => state.addedPatient,
  GET_PATIENTS: state => state.patients,
};

const mutations = {
  SET_ADDED_PATIENT(state, payload) {
    state.addedPatient = payload;
  },

  SET_PATIENTS(state, payload) {
    state.patients = payload;
  },
};

const actions = {
  async createPatient({ commit }, form) {
    const { data } = await usePost("/patients", form);
    await commit("SET_ADDED_PATIENT", data);
  },

  async fetchPatients({ commit }) {
    const { response } = await useFetch("/patients");
    await commit("SET_PATIENTS", response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
