<template>
  <FormLayout form-title="Delete Patient" form-icon="mdi-account-cancel">
    <v-container v-if="deleteForm !== null" class="font-weight-bold">
      Do you want to delete {{ deleteForm.data.attributes.fullname }} ?
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="deleteForm !== null"
        color="red"
        dark
        @click="
          $store.dispatch('patient/deletePatient', deleteForm.data.patient_id)
        "
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
  name: "PatientDelete",
  components: {
    FormLayout,
  },
  computed: {
    deleteForm: function () {
      return this.$store.getters["patient/GET_PATIENT"];
    },
  },
};
</script>
