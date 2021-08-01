<template>
  <v-container> Logging out </v-container>
</template>

<script>
export default {
  name: "Logout",
  async mounted() {
    await this.$store.dispatch("auth/logout");
  },
};
</script>
