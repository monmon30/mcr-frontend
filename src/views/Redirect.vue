<template>
  <v-container fluid fill-height class="pa-5">
    <v-row align="center" justify="center" dense>
      <v-col cols="1">
        <v-progress-circular
          :size="170"
          :width="20"
          color="purple"
          indeterminate
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Redirect",

  async mounted() {
    this.$store.dispatch("auth/redirect");
  },
};
</script>
