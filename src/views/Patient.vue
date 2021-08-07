<template>
  <PatientDashBoardLayout
    header-title="MEDICAL CLINIC RECORDS - PATIENT"
    :nav-items="headers"
  >
    <router-view :key="$route.fullPath" />
  </PatientDashBoardLayout>
</template>

<script>
import PatientDashBoardLayout from "@/components/layout/PatientDashboardLayout.vue";
export default {
  name: "Patient",
  components: {
    PatientDashBoardLayout,
  },
  data: () => ({
    headers: [
      {
        name: "Patient Profile",
        icon: "mdi-account-group",
        link: { name: "patient.profile" },
      },
      {
        name: "Create Appointment",
        icon: "mdi-account-box",
        link: { name: "patient.create.appointment" },
      },

      {
        name: "Appointment",
        icon: "mdi-account-box-multiple",
        link: { name: "patient.index.appointment" },
      },
    ],
  }),
};
</script>
