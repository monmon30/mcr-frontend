<template>
  <v-app>
    <v-app-bar app color="blue" dark fixed>
      <div class="d-flex align-center font-weight-bold">
        {{ headerTitle }}
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
