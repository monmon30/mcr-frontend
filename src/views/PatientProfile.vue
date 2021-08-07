<template>
  <PatientProfileLayout :patient="auth" />
</template>

<script>
import { mapGetters } from "vuex";
import PatientProfileLayout from "@/components/layout/PatientProfileLayout.vue";

export default {
  name: "PatientProfile",
  components: {
    PatientProfileLayout,
  },
  computed: {
    ...mapGetters({
      auth: "patient/GET_AUTH_PATIENT",
    }),
  },
};
</script>
