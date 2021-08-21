<template>
  <DashBoardLayout
    header-title="MEDICAL CLINIC RECORDS - ADMIN"
    :nav-items="navItems"
  >
    <router-view :key="$route.fullPath" />
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/components/layout/DashboardLayout.vue";
export default {
  name: "Admin",
  components: {
    DashBoardLayout,
  },
  data: () => ({
    navItems: [
      {
        name: "Patients",
        icon: "mdi-account-group",
        link: { name: "admin.index.patient" },
      },
      {
        name: "Add Patient",
        icon: "mdi-account-plus",
        link: { name: "admin.create.patient" },
      },
      {
        name: "Appointments",
        icon: "mdi-account-multiple-check",
        link: { name: "admin.index.appointment" },
      },
      {
        name: "Users",
        icon: "mdi-account",
        link: { name: "user" },
      },
    ],
  }),
};
</script>
