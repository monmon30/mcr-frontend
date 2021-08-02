<template>
  <FormLayout form-title="List of Patients" form-icon="mdi-account-group">
    <v-data-table
      v-if="patients !== null"
      :headers="headers"
      :items="patients.data.data"
      :items-per-page="patients.data.meta.per_page"
      dense
    />
  </FormLayout>
</template>

<script>
import { mapGetters } from "vuex";
import FormLayout from "@/components/layout/FormLayout.vue";
export default {
  name: "PatientDataTable",
  components: {
    FormLayout,
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
      { text: "Address", value: "data.attributes.address", sortable: false },
    ],
  }),

  async mounted() {
    await this.$store.dispatch("patient/fetchPatients");
  },

  computed: {
    ...mapGetters({
      patients: "patient/GET_PATIENTS",
    }),
  },
};
</script>
