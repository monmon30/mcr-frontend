import { usePost, useFetch, usePut, useDelete } from "../../custom_hooks";
import store from "../../store";

const state = () => ({
  addedPatient: null,
  patients: null,
  patient: null,
  patientResponse: null,
  loading: null,
});

const getters = {
  GET_ADDED_PATIENT: state => state.addedPatient,
  GET_PATIENTS: state => state.patients,
  GET_PATIENT: state => state.patient,
  GET_PATIENT_RESPONSE: state => state.patientResponse,
  GET_LOADING: state => state.loading,
};

const mutations = {
  SET_ADDED_PATIENT(state, payload) {
    state.addedPatient = payload;
  },

  SET_PATIENTS(state, payload) {
    state.patients = payload;
  },
  SET_PATIENT(state, payload) {
    state.patient = payload;
  },

  SET_PATIENT_RESPONSE(state, payload) {
    state.patientResponse = payload;
  },

  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

const actions = {
  async createPatient({ commit }, form) {
    const { data } = await usePost("/patients", form);
    await commit("SET_ADDED_PATIENT", data);
  },

  async fetchPatients({ commit }) {
    commit("SET_LOADING", true);
    const { data, response, loading } = await useFetch("/patients");
    await commit("SET_PATIENTS", data);
    await commit("SET_PATIENT_RESPONSE", response);
    await commit("SET_LOADING", loading);
  },

  async updatePatient({ dispatch }, { form, id }) {
    const { data } = await usePut(`/patients/${id}`, form);
    alert(`${data.data.attributes.fullname} has been updated.`);
    dispatch("fetchPatients");
  },

  async deletePatient({ state, commit }, id) {
    await useDelete(`/patients/${id}`);
    await store.commit("global/SET_DIALOG_DELETE", false);
    const filteredPatients = state.patients.filter(
      patient => id !== patient.data.patient_id
    );
    commit("SET_PATIENTS", filteredPatients);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
