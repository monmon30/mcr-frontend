<template>
  <v-navigation-drawer permanent expand-on-hover app color="grey lighten-5">
    <v-list>
      <!-- <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item> -->

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ auth.attributes.fullname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ auth.attributes.email }}
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters({
      auth: "auth/GET_USER",
    }),
  },

  props: {
    navItems: {
      type: Array,
      require: true,
    },
  },
};
</script>
