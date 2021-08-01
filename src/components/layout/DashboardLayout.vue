<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <div class="d-flex align-center font-weight-bold">
        {{ headerTitle }}
      </div>
      <v-spacer />
      <LogoutButtonDialog />
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import LogoutButtonDialog from "@/components/LogoutButtonDialog.vue";
export default {
  name: "DashboardLayout",
  props: {
    headerTitle: {
      type: String,
    },
  },
  components: {
    LogoutButtonDialog,
  },
};
</script>
