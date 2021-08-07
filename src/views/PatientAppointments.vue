<template>
  <FormLayout form-title="List of Appointments" form-icon="mdi-account-group">
    <v-data-table
      :headers="headers"
      :items="appointments.data"
      dense
      :loading="loading"
    >
      <template v-slot:item.actions="{ item }">
        <v-row align="center" justify="center" dense>
          <v-col sm="12" md="4">
            <v-btn color="green" dark small @click="setConsultationData(item)">
              VIEW CONSULTATION
            </v-btn>
          </v-col>

          <v-spacer></v-spacer>
        </v-row>
      </template>
    </v-data-table>

    <DialogLayout getter-val="GET_DIALOG_EDIT" setter-val="SET_DIALOG_EDIT">
      <PatientConsultations />
    </DialogLayout>

    <DialogLayout getter-val="GET_DIALOG_DELETE" setter-val="SET_DIALOG_DELETE">
      <PatientDelete />
    </DialogLayout>
  </FormLayout>
</template>

<script>
import { mapGetters } from "vuex";

import FormLayout from "@/components/layout/FormLayout.vue";
import DialogLayout from "@/components/layout/DialogLayout.vue";
import PatientDelete from "@/components/PatientDelete.vue";
import PatientConsultations from "@/components/PatientConsultations.vue";
export default {
  name: "PatientAppointments",
  mounted() {
    this.$store.dispatch("patient/fetchPatientAppointment");
  },
  components: {
    FormLayout,
    DialogLayout,
    PatientDelete,
    PatientConsultations,
  },
  data: () => ({
    headers: [
      {
        text: "Schedule",
        align: "start",
        sortable: false,
        value: "data.attributes.schedule",
      },
      { text: "Reason", value: "data.attributes.reason", sortable: false },
      { text: "Actions", value: "actions" },
    ],
  }),

  methods: {
    setConsultationData(item) {
      console.log(item);
      const { dispatch, commit } = this.$store;
      commit("patient/SET_APPOINTMENT_CONSULTATION", item.data.appointment_id);
      dispatch("global/openDialog", "SET_DIALOG_EDIT");
    },

    setDeleteData(item) {
      const { commit, dispatch } = this.$store;
      commit("patient/SET_PATIENT", item);
      dispatch("global/openDialog", "SET_DIALOG_DELETE");
    },
  },

  computed: {
    ...mapGetters({
      loading: "patient/GET_LOADING",
      appointments: "patient/GET_AUTH_APPOINTMENTS",
    }),
  },
};
</script>
