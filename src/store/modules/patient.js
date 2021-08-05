import { usePost, useFetch, usePut, useDelete } from "../../custom_hooks";
import store from "../../store";

const state = () => ({
  addedPatient: null,
  patients: null,
  patient: null,
  patientResponse: null,
  loading: null,

  editId: null,
  editForm: {
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    birthday: "",
    sex: "",
    address: "",
    contact_number: "",
    landline: "",
    email: "",
  },
});

const getters = {
  GET_ADDED_PATIENT: state => state.addedPatient,
  GET_PATIENTS: state => state.patients,
  GET_PATIENT: state => state.patient,
  GET_PATIENT_RESPONSE: state => state.patientResponse,
  GET_LOADING: state => state.loading,

  GET_EDIT_FIRSTNAME: state => state.editForm.firstname,
  GET_EDIT_MIDDLENAME: state => state.editForm.middlename,
  GET_EDIT_LASTNAME: state => state.editForm.lastname,
  GET_EDIT_SUFFIX: state => state.editForm.suffix,
  GET_EDIT_BIRTHDAY: state => state.editForm.birthday,
  GET_EDIT_SEX: state => state.editForm.sex,
  GET_EDIT_ADDRESS: state => state.editForm.address,
  GET_EDIT_CONTACT_NUMBER: state => state.editForm.contact_number,
  GET_EDIT_LANDLINE: state => state.editForm.landline,
  GET_EDIT_EMAIL: state => state.editForm.email,
};

const mutations = {
  SET_EDIT_FIRSTNAME(state, payload) {
    state.editForm.firstname = payload;
  },
  SET_EDIT_MIDDLENAME(state, payload) {
    state.editForm.middlename = payload;
  },
  SET_EDIT_LASTNAME(state, payload) {
    state.editForm.lastname = payload;
  },
  SET_EDIT_SUFFIX(state, payload) {
    state.editForm.suffix = payload;
  },
  SET_EDIT_BIRTHDAY(state, payload) {
    state.editForm.birthday = payload;
  },
  SET_EDIT_SEX(state, payload) {
    state.editForm.sex = payload;
  },
  SET_EDIT_ADDRESS(state, payload) {
    state.editForm.address = payload;
  },
  SET_EDIT_CONTACT_NUMBER(state, payload) {
    state.editForm.contact_number = payload;
  },
  SET_EDIT_LANDLINE(state, payload) {
    state.editForm.landline = payload;
  },
  SET_EDIT_EMAIL(state, payload) {
    state.editForm.email = payload;
  },

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

  SET_EDIT_FORM(state, item) {
    state.editId = item.patient_id;
    state.editForm.firstname = item.attributes.firstname;
    state.editForm.middlename = item.attributes.middlename;
    state.editForm.lastname = item.attributes.lastname;
    state.editForm.suffix = item.attributes.suffix;
    state.editForm.birthday = item.attributes.birthday;
    state.editForm.sex = item.attributes.sex;
    state.editForm.address = item.attributes.address;
    state.editForm.contact_number = item.attributes.contact_number;
    state.editForm.landline = item.attributes.landline;
    state.editForm.email = item.attributes.email;
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

  async updatePatient({ state, dispatch }) {
    const { data } = await usePut(`/patients/${state.editId}`, state.editForm);
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
