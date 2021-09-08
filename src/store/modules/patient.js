import {
  usePost,
  useFetch,
  usePut,
  useDelete,
  useWebFetch,
} from "../../custom_hooks";
import store from "../../store";
import router from "../../router";

const state = () => ({
  addedPatient: null,
  patients: null,
  patient: null,
  patientResponse: null,
  loading: null,

  authPatient: JSON.parse(sessionStorage.getItem("_authPatient")),
  authPatientAppointments: null,
  appointmentConsultation: null,
  appointmentConsultations: null,

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

  GET_AUTH_PATIENT: state => state.authPatient,
  GET_AUTH_APPOINTMENTS: state => state.authPatientAppointments,
  GET_AUTH_CONSULTATIONS: state => state.authPatient.data.consultations,
  GET_APPOINTMENT_CONSULTATION: state => state.appointmentConsultation,
  GET_APPOINTMENT_CONSULTATIONS: state => state.appointmentConsultations,
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

  SET_AUTH_PATIENT(state, payload) {
    sessionStorage.setItem("_authPatient", JSON.stringify(payload));
    state.authPatient = payload;
  },

  SET_AUTH_APPOINTMENTS(state, payload) {
    state.authPatientAppointments = payload;
  },

  SET_APPOINTMENT_CONSULTATION(state, appointmentId) {
    console.log(state.authPatient.data.consultations.data);
    const newArr = state.authPatient.data.consultations.data.filter(consult => {
      return consult.data.attributes.appointment_id === appointmentId;
    });
    state.appointmentConsultation = newArr;
  },

  SET_APPOINTMENT_CONSULTATIONS(state, payload) {
    state.appointmentConsultations = payload;
  },
};

const actions = {
  async createPatient({ commit }, form) {
    commit("SET_LOADING", true);
    const { data, loading, isError } = await usePost("patients", form);
    await commit("SET_ADDED_PATIENT", data);
    commit("SET_LOADING", loading);
    if (isError) {
      alert("Failed to add patient!");
    } else {
      alert("Patient has been added successfully!");
    }
  },

  async fetchPatients({ commit }) {
    commit("SET_LOADING", true);
    const { data, response, loading } = await useFetch("patients");
    await commit("SET_PATIENTS", data);
    await commit("SET_PATIENT_RESPONSE", response);
    await commit("SET_LOADING", loading);
  },

  async updatePatient({ state, dispatch }) {
    const { data } = await usePut(`patients/${state.editId}`, state.editForm);
    alert(`${data.data.attributes.fullname} has been updated.`);
    dispatch("fetchPatients");
  },

  async deletePatient({ state, commit }, id) {
    await useDelete(`patients/${id}`);
    await store.commit("global/SET_DIALOG_DELETE", false);
    const filteredPatients = state.patients.filter(
      patient => id !== patient.data.patient_id
    );
    commit("SET_PATIENTS", filteredPatients);
  },

  async login({ commit }, form) {
    const { data, isError } = await usePost("patients/auth/login", form);
    await commit("SET_AUTH_PATIENT", data);
    await commit("SET_AUTH_APPOINTMENTS", data.data.appointments);
    if (!isError) {
      router.push({ name: "patient.profile" });
    }
  },

  logout({ commit }) {
    sessionStorage.removeItem("_authPatient");
    commit("SET_AUTH_PATIENT", null);
    router.push({ name: "patient.login" });
  },

  async createAppointment({ state, commit }, form) {
    commit("SET_LOADING", true);

    const { loading } = await usePost(
      `patients/${state.authPatient.data.patient_id}/appointments`,
      form
    );
    commit("SET_LOADING", loading);
  },

  async fetchPatientAppointment({ state, commit }) {
    const { data } = await useFetch(
      `patients/${state.authPatient.data.patient_id}/appointments`
    );
    console.log(data);
    commit("SET_AUTH_APPOINTMENTS", data.appointments);
  },

  async fetchAuthPatientAppointmentConsultations(
    { state, commit },
    appointmentId
  ) {
    const { data } = await useFetch(
      `appointments/${appointmentId}/patients/${state.authPatient.data.patient_id}`
    );
    commit("SET_APPOINTMENT_CONSULTATIONS", data);
  },

  async generatePatientConsultationReport(_, patientId) {
    const { data } = await useWebFetch(`pdf/patients/${patientId}`);
    store.commit("global/SET_PDF", data.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
