<template>
  <AppointmentDataTable />
</template>

<script>
import AppointmentDataTable from "@/components/AppointmentDataTable.vue";
export default {
  name: "Appointment",
  mounted() {
    this.$store.dispatch("appointment/fetchAppointments");
  },

  components: {
    AppointmentDataTable,
  },

  computed: {
    appointments() {
      return this.$store.getters["appointment/GET_APPOINTMENTS"];
    },
  },
};
</script>
