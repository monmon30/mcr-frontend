<template>
  <FormLayout form-title="Consultations">
    <div v-if="consultations.length == 0">No consultation data!</div>
    <Consultations else :consultations="consultations" />
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
import Consultations from "@/components/Consultations.vue";

import { mapGetters } from "vuex";
export default {
  name: "PatientConsultations",
  components: {
    FormLayout,
    Consultations,
  },
  computed: {
    ...mapGetters({
      consultations: "patient/GET_APPOINTMENT_CONSULTATION",
    }),
  },
};
</script>
