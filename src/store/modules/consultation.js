import { usePost } from "../../custom_hooks";

const state = () => ({
  patientData: null,
});

const getters = {
  GET_PATIENT_DATA: state => state.patientData,
};

const mutations = {
  SET_PATIENT_DATA(state, payload) {
    state.patientData = payload;
  },
};

const actions = {
  async createConsultation(_, { form, patientId, appointmentId }) {
    const newForm = { ...form, ...{ appointment_id: appointmentId } };
    const { data } = await usePost(
      `/patients/${patientId}/consultations`,
      newForm
    );
    console.log(data);
  },

  async markAppointmentDone(_, { patientId, appointmentId }) {
    const { data } = await usePost(
      `/patients/${patientId}/appointments/${appointmentId}/done`
    );
    console.log(data, "appointment done!");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
