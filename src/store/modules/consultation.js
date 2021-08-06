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
  async createConsultation(_, { form, patientId }) {
    console.log(form);
    const { data } = await usePost(
      `/patients/${patientId}/consultations`,
      form
    );
    console.log(data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
