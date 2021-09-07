import { useDelete, useFetch, usePost, usePut } from "../../custom_hooks";
import store from "../../store";

const state = () => ({
  users: [],
  user: null,
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
  deleteUserData: null,
});

const getters = {
  GET_USERS: state => state.users,
  GET_USER: state => state.user,

  GET_LOADING: state => state.loading,

  GET_EDIT_FIRSTNAME: state => state.editForm.firstname,
  GET_EDIT_MIDDLENAME: state => state.editForm.middlename,
  GET_EDIT_LASTNAME: state => state.editForm.lastname,
  GET_EDIT_EMAIL: state => state.editForm.email,
  GET_EDIT_ROLES: state => state.editForm.roles,
  GET_EDIT_BIRTHDAY: state => state.editForm.birthday,

  GET_DELETE_USER_DATA: state => state.deleteUserData,
};

const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },

  SET_USER(state, payload) {
    state.user = payload;
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

  UNSET_EDIT_FORM(state) {
    state.editId = null;
    state.editForm.firstname = null;
    state.editForm.middlename = null;
    state.editForm.lastname = null;
    state.editForm.email = null;
    state.editForm.roles = null;
    state.editForm.birthday = null;
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

  SET_DELETE_USER_DATA(state, payload) {
    state.deleteUserData = payload;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    commit("SET_LOADING", true);
    const { data, loading } = await useFetch("users");
    await commit("SET_USERS", data);
    await commit("SET_LOADING", loading);
  },

  async createUser({ commit, state }, form) {
    commit("SET_LOADING", true);
    const { data, loading } = await usePost("users", form);
    await state.users.unshift(data);
    await commit("SET_LOADING", loading);
  },

  async updateUser({ commit, state }) {
    commit("SET_LOADING", true);
    const { data, loading } = await usePut(
      `users/${state.editId}`,
      state.editForm
    );
    await commit("SET_LOADING", loading);
    const index = state.users.findIndex(
      user => user.data.user_id == state.editId
    );
    Object.assign(state.users[index], data);
  },

  async deleteUser({ commit, state }) {
    commit("SET_LOADING", true);
    const { loading, isError } = await useDelete(
      `users/${state.deleteUserData.data.user_id}`
    );
    commit("SET_LOADING", loading);
    const newArr = state.users.filter(user => user !== state.deleteUserData);
    commit("SET_USERS", newArr);
    if (isError) {
      alert("Failed to delete user!");
    }
    store.commit("global/SET_DIALOG_DELETE", false);
  },

  async resetPassword({ state }, form) {
    const { isError } = await usePost(
      `users/${state.user.data.user_id}/password/reset`,
      form
    );
    if (isError) {
      alert("Failed to update password!");
    } else {
      alert("Password has been updated.");
    }

    return { isError };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
