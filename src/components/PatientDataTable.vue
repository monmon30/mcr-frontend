<template>
  <FormLayout form-title="List of Patients" form-icon="mdi-account-group">
    <v-data-table
      v-if="loading === false"
      :headers="headers"
      :items="patients"
      :items-per-page="patientResponse.data.meta.per_page"
      dense
      :loading="loading"
    >
      <template v-slot:item.actions="{ item }">
        <v-row align="center" justify="center" dense>
          <v-col sm="12" md="4">
            <v-btn color="blue" block small dark @click="setViewData(item)">
              VIEW PROFILE
            </v-btn>
          </v-col>
          <v-col sm="12" md="4">
            <v-btn color="green" block small dark @click="setEditData(item)">
              EDIT
            </v-btn>
          </v-col>
          <v-col sm="12" md="4">
            <v-btn color="red" block small dark @click="setDeleteData(item)">
              DELETE
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-data-table>

    <DialogLayout getter-val="GET_DIALOG_VIEW" setter-val="SET_DIALOG_VIEW">
      <PatientViewDataLayout />
    </DialogLayout>

    <DialogLayout getter-val="GET_DIALOG_EDIT" setter-val="SET_DIALOG_EDIT">
      <PatientEditForm />
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
import PatientViewDataLayout from "@/components/layout/PatientViewDataLayout.vue";

import PatientDelete from "@/components/PatientDelete.vue";
import PatientEditForm from "@/components/form/PatientEditForm.vue";

export default {
  name: "PatientDataTable",

  async mounted() {
    await this.$store.dispatch("patient/fetchPatients");
  },

  components: {
    FormLayout,
    DialogLayout,
    PatientDelete,
    PatientEditForm,
    PatientViewDataLayout,
  },
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
        text: "Contact Number",
        value: "data.attributes.contact_number",
        sortable: false,
      },
      { text: "Sex", value: "data.attributes.sex", sortable: false },
      { text: "Actions", value: "actions" },
    ],
  }),

  methods: {
    setViewData(item) {
      const { commit, dispatch } = this.$store;
      commit("patient/SET_PATIENT", item);
      dispatch("global/openDialog", "SET_DIALOG_VIEW");
    },

    setEditData(item) {
      const { commit, dispatch } = this.$store;
      commit("patient/SET_EDIT_FORM", item.data);
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
      patients: "patient/GET_PATIENTS",
      patientResponse: "patient/GET_PATIENT_RESPONSE",
      loading: "patient/GET_LOADING",
    }),
  },
};
</script>
