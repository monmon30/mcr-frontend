<template>
  <v-data-table v-if="users.length > 0" :items="users" :headers="headers">
    <template v-slot:top>
      <v-spacer></v-spacer>
      <v-row align="center" justify="end" dense>
        <v-col>
          <v-btn
            color="blue darken-5"
            small
            dark
            @click="openDialog('SET_DIALOG_CREATE')"
          >
            <v-icon left> mdi-account-plus </v-icon>
            CREATE USER
          </v-btn>
        </v-col>
      </v-row>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="6">
          <v-btn
            dark
            color="green lighten-1"
            small
            block
            @click="setEditData(item)"
          >
            update
          </v-btn>
        </v-col>

        <v-col sm="12" md="6">
          <v-btn
            dark
            color="red lighten-1"
            small
            block
            @click="setDeleteData(item)"
          >
            delete
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserDataTable",
  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "data.attributes.fullname",
      },
      { text: "Email", value: "data.attributes.email", sortable: false },
      {
        text: "Role",
        value: "data.attributes.roles",
        sortable: false,
      },
      { text: "Actions", value: "actions" },
    ],
  }),

  methods: {
    ...mapActions({
      openDialog: "global/openDialog",
    }),

    setEditData(item) {
      const { commit, dispatch } = this.$store;
      commit("user/SET_EDIT_FORM", item);
      dispatch("global/openDialog", "SET_DIALOG_EDIT");
    },

    setDeleteData(item) {
      const { commit, dispatch } = this.$store;
      commit("user/SET_DELETE_USER_DATA", item);
      dispatch("global/openDialog", "SET_DIALOG_DELETE");
    },
  },

  computed: {
    ...mapGetters({
      users: "user/GET_USERS",
    }),
  },
};
</script>
