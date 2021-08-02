<template>
  <DashBoardLayout
    header-title="MEDICAL CLINIC RECORDS - DOCTOR"
    :nav-items="navItems"
  >
    <router-view :key="$route.fullPath" />
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/components/layout/DashboardLayout.vue";
export default {
  name: "Doctor",
  components: {
    DashBoardLayout,
  },
  data: () => ({
    navItems: [
      {
        name: "Patients",
        icon: "mdi-account-group",
        link: { name: "doctor.index.patient" },
      },
      {
        name: "Add Patient",
        icon: "mdi-account-plus",
        link: { name: "doctor.create.patient" },
      },
    ],
  }),
};
</script>
