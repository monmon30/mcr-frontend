<template>
  <DashBoardLayout header-title="MEDICAL CLINIC RECORDS - ADMIN">
    <router-view :key="$route.fullPath" />
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/components/layout/DashboardLayout.vue";
export default {
  name: "Encoder",
  components: {
    DashBoardLayout,
  },
};
</script>
