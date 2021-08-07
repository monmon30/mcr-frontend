<template>
  <v-app>
    <v-app-bar app color="blue" dark fixed>
      <div class="d-flex align-center font-weight-bold">
        <v-img
          width="50"
          height="50"
          class="rounded-circle mr-3"
          src="@/assets/img/pateros.png"
        />
        MEDICAL CLINIC RECORDS OF BARANGAY SAN ROQUE, PATEROS
      </div>
      <v-spacer />
      <LogoutButtonDialog />
    </v-app-bar>
    <NavigationDrawer :nav-items="navItems" />

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogoutButtonDialog from "@/components/LogoutButtonDialog.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default {
  name: "DashboardLayout",
  props: {
    headerTitle: {
      type: String,
    },
    navItems: {
      type: Array,
      require: true,
    },
  },
  components: {
    LogoutButtonDialog,
    NavigationDrawer,
  },
};
</script>
