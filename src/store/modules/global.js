const state = () => ({
  dialog: {
    view: false,
    create: false,
    edit: false,
    delete: false,
    reset: false,
  },
});

const getters = {
  GET_DIALOG_EDIT: state => state.dialog.edit,
  GET_DIALOG_DELETE: state => state.dialog.delete,
  GET_DIALOG_CREATE: state => state.dialog.create,
  GET_DIALOG_VIEW: state => state.dialog.view,
  GET_DIALOG_RESET: state => state.dialog.reset,
};

const mutations = {
  SET_DIALOG_EDIT(state, payload) {
    state.dialog.edit = payload;
  },
  SET_DIALOG_DELETE(state, payload) {
    state.dialog.delete = payload;
  },
  SET_DIALOG_CREATE(state, payload) {
    state.dialog.create = payload;
  },

  SET_DIALOG_VIEW(state, payload) {
    state.dialog.view = payload;
  },

  SET_DIALOG_RESET(state, payload) {
    state.dialog.reset = payload;
  },
};

const actions = {
  openDialog({ commit }, mutation) {
    commit(mutation, true);
  },

  closeDialog({ commit }, mutation) {
    commit(mutation, false);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
