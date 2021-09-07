<template>
  <v-btn
    small
    color="teal"
    block
    dark
    @click="generatePatientConsultationReport"
  >
    <v-icon left v-if="showIcon"> mdi-file-pdf </v-icon>
    VIEW PDF
  </v-btn>
</template>

<script>
export default {
  name: "GeneratePatientReportButton",
  props: {
    patientId: {
      type: [String, Number],
      required: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    async generatePatientConsultationReport() {
      await this.$store.dispatch(
        "patient/generatePatientConsultationReport",
        this.patientId
      );

      this.$store.commit("global/SET_DIALOG_VIEW_PDF", true);
    },
  },
};
</script>
