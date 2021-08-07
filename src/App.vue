<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center font-weight-bold">
        <v-img
          width="50"
          height="50"
          class="rounded-circle mr-3"
          src="@/assets/img/pateros.png"
        />
        MEDICAL CLINIC RECORDS OF BARANGAY SAN ROQUE, PATEROS
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
