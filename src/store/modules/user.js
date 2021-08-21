import { useFetch, usePost, usePut } from "../../custom_hooks";
// import store from "../../store";

const state = () => ({
  users: [],
  loading: false,
  editId: null,
  editForm: {
    firstname: null,
    middlename: null,
    lastname: null,
    email: null,
    roles: null,
    birthday: null,
  },
});

const getters = {
  GET_USERS: state => state.users,
  GET_LOADING: state => state.loading,

  GET_EDIT_FIRSTNAME: state => state.editForm.firstname,
  GET_EDIT_MIDDLENAME: state => state.editForm.middlename,
  GET_EDIT_LASTNAME: state => state.editForm.lastname,
  GET_EDIT_EMAIL: state => state.editForm.email,
  GET_EDIT_ROLES: state => state.editForm.roles,
  GET_EDIT_BIRTHDAY: state => state.editForm.birthday,
};

const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },

  SET_LOADING(state, payload) {
    state.loading = payload;
  },

  SET_EDIT_FORM(state, item) {
    state.editId = item.data.user_id;
    state.editForm.firstname = item.data.attributes.firstname;
    state.editForm.middlename = item.data.attributes.middlename;
    state.editForm.lastname = item.data.attributes.lastname;
    state.editForm.email = item.data.attributes.email;
    state.editForm.roles = item.data.attributes.roles;
    state.editForm.birthday = item.data.attributes.birthday;
  },

  SET_EDIT_FIRSTNAME(state, payload) {
    state.editForm.firstname = payload;
  },
  SET_EDIT_MIDDLENAME(state, payload) {
    state.editForm.middlename = payload;
  },
  SET_EDIT_LASTNAME(state, payload) {
    state.editForm.lastname = payload;
  },
  SET_EDIT_BIRTHDAY(state, payload) {
    state.editForm.birthday = payload;
  },
  SET_EDIT_EMAIL(state, payload) {
    state.editForm.email = payload;
  },
  SET_EDIT_ROLES(state, payload) {
    state.editForm.roles = payload;
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

  async updateUser({ commit, state }) {
    commit("SET_LOADING", true);
    const { data, loading } = await usePut(
      `/users/${state.editId}`,
      state.editForm
    );
    await commit("SET_LOADING", loading);
    const index = state.users.findIndex(
      user => user.data.user_id == state.editId
    );
    Object.assign(state.users[index], data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
