<template>
  <FormLayout form-title="Delete User" form-icon="mdi-account-cancel">
    <v-container v-if="userData !== null" class="font-weight-bold">
      Do you want to delete {{ userData.data.attributes.fullname }} ?
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="userData !== null"
        color="red"
        dark
        @click="$store.dispatch('user/deleteUser', userData.data.user_id)"
      >
        DELETE
      </v-btn>
      <v-btn
        color="grey darken-3"
        @click="$store.commit('global/SET_DIALOG_DELETE', false)"
        dark
      >
        CANCEL
      </v-btn>
    </v-card-actions>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";

export default {
  name: "UserDeleteForm",
  components: {
    FormLayout,
  },
  computed: {
    userData: function () {
      return this.$store.getters["user/GET_DELETE_USER_DATA"];
    },
  },
};
</script>
