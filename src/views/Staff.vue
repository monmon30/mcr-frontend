<template>
  <DashBoardLayout
    header-title="MEDICAL CLINIC RECORDS - STAFF"
    :nav-items="navItems"
  >
    <router-view :key="$route.fullPath" />
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/components/layout/DashboardLayout.vue";
export default {
  name: "Staff",
  components: {
    DashBoardLayout,
  },
  data: () => ({
    navItems: [
      {
        name: "Patients",
        icon: "mdi-account-group",
        link: { name: "staff.index.patient" },
      },
      {
        name: "Add Patient",
        icon: "mdi-account-plus",
        link: { name: "staff.create.patient" },
      },
    ],
  }),
};
</script>
