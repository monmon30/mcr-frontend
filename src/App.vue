<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center font-weight-bold">
        MEDICAL CLINIC RECORDS
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
