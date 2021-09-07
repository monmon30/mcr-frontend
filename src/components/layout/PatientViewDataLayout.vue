<template>
  <FormLayout form-title="Patient Data">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step @click="e1 = 1" step="1" style="cursor: pointer">
          Personal Information
        </v-stepper-step>

        <v-stepper-step @click="e1 = 2" step="2" style="cursor: pointer">
          Consultations
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <PatientProfileLayout :patient="patient" />
        </v-stepper-content>

        <v-stepper-content step="2">
          <GeneratePatientReportButton :patient-id="patient.data.patient_id" />
          <Consultations :consultations="patient.data.consultations.data" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
import PatientProfileLayout from "@/components/layout/PatientProfileLayout.vue";
import Consultations from "@/components/Consultations.vue";
import GeneratePatientReportButton from "@/components/button/GeneratePatientReportButton";
export default {
  name: "PatientViewDataLayout",
  data: () => ({
    e1: 1,
  }),
  components: {
    FormLayout,
    PatientProfileLayout,
    Consultations,
    GeneratePatientReportButton,
  },
  computed: {
    patient() {
      return this.$store.getters["patient/GET_PATIENT"];
    },
  },
};
</script>
