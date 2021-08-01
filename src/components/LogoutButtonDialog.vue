<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon dark v-bind="attrs" v-on="on">
        <v-icon dark> mdi-logout </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Logout </v-card-title>

      <v-card-text> Are you sure you want to logout? </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark color="red" :to="{ name: 'Logout' }"> Logout </v-btn>
        <v-btn dark color="secondary" @click="dialog = false"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LogoutButtonDialog",
  data: () => ({
    dialog: false,
  }),
};
</script>
