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
      <v-btn icon dark title="Logout">
        <v-icon @click="$store.dispatch('patient/logout')" dark>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <PatientNavigationDrawer :nav-items="navItems" /> -->
    <v-navigation-drawer permanent expand-on-hover app color="grey lighten-5">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ auth.data.attributes.fullname }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ auth.data.attributes.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense v-for="(navItem, index) in navItems" :key="index">
        <v-list-item link :to="navItem.link">
          <v-list-item-icon>
            <v-icon>{{ navItem.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ navItem.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PatientDashboardLayout",

  props: {
    headerTitle: {
      type: String,
    },
    navItems: {
      type: Array,
      require: true,
    },
  },

  computed: {
    ...mapGetters({
      auth: "patient/GET_AUTH_PATIENT",
    }),
  },
};
</script>
